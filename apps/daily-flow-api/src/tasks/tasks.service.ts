import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { SubTasksService } from 'src/subtasks/sub-task.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    private subTasksService: SubTasksService,
  ) {}

  async findOne(id: string) {
    return await this.tasksRepository.findOne({
      where: { id },
      relations: ['subtasks'], // subtasks 관계도 함께 로드
    });
  }

  async create(
    userId: string,
    createTaskDto: CreateTaskDto & { subtasks?: any[] },
  ) {
    const { subtasks, ...taskData } = createTaskDto;

    const tasksCount = await this.tasksRepository.count({
      where: {
        status_id: taskData.status_id,
      },
    });

    const task = this.tasksRepository.create({
      ...taskData,
      user_id: userId,
      order: taskData.order ?? tasksCount,
    });
    const savedTask = await this.tasksRepository.save(task);

    if (subtasks && subtasks.length > 0) {
      for (const [index, subtaskData] of subtasks.entries()) {
        await this.subTasksService.create({
          task_id: savedTask.id,
          ...subtaskData,
          order: subtaskData.order ?? index,
        });
      }
    }

    return this.findOne(savedTask.id);
  }

  async findAllByUser(userId: string) {
    return await this.tasksRepository.find({
      where: { user_id: userId },
      relations: ['subtasks'],
    });
  }

  async findByCategory(categoryId: string) {
    return await this.tasksRepository.find({
      where: { category_id: categoryId },
      relations: ['subtasks'],
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const { subtasks, ...taskData } = updateTaskDto;

    // 기존 태스크 조회
    const existingTask = await this.tasksRepository.findOne({
      where: { id },
      relations: ['subtasks'],
    });

    if (!existingTask) {
      throw new Error('Task not found');
    }

    // 메인 태스크 업데이트
    await this.tasksRepository
      .createQueryBuilder()
      .update(Task)
      .set({
        main_task: taskData.main_task,
        memo: taskData.memo,
        category_id: taskData.category_id,
        status_id: taskData.status_id,
        type: taskData.type,
        period: taskData.period,
        complete: taskData.complete,
        expenditure: taskData.expenditure,
      })
      .where('id = :id', { id })
      .execute();

    // 서브태스크 업데이트
    if (subtasks) {
      try {
        // 기존 서브태스크 삭제
        await this.subTasksService.deleteByTaskId(id);

        // 새로운 서브태스크 생성
        for (const [index, subtaskData] of subtasks.entries()) {
          await this.subTasksService.create({
            task_id: id,
            ...subtaskData,
            order: subtaskData.order ?? index,
          });
        }
      } catch (error) {
        console.error('Error updating subtasks:', error);
        throw error;
      }
    }

    return this.findOne(id);
  }

  async delete(id: string) {
    await this.tasksRepository.delete(id);
  }
}
