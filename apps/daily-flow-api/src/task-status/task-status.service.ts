import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { Repository } from 'typeorm';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Injectable()
export class TaskStatusService {
  constructor(
    @InjectRepository(TaskStatus)
    private taskStatusRepository: Repository<TaskStatus>,
  ) {}

  async create(createTaskStatusDto: CreateTaskStatusDto) {
    const taskStatus = this.taskStatusRepository.create(createTaskStatusDto);
    return await this.taskStatusRepository.save(taskStatus);
  }

  async findByCategory(categoryId: string) {
    return await this.taskStatusRepository.find({
      where: { category_id: categoryId },
    });
  }

  async update(id: string, updateTaskStatusDto: UpdateTaskStatusDto) {
    await this.taskStatusRepository.update(id, updateTaskStatusDto);
    return this.taskStatusRepository.findOne({ where: { id } });
  }

  async delete(id: string) {
    await this.taskStatusRepository.delete(id);
  }
}
