import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubTask } from './entities/subtask.entity';
import { CreateSubTaskDto } from './dto/create-sub-task.dto';
import { UpdateSubTaskDto } from './dto/update-sub-task.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SubTasksService {
  constructor(
    @InjectRepository(SubTask)
    private subTasksRepository: Repository<SubTask>,
  ) {}

  async create(createSubTaskDto: CreateSubTaskDto) {
    const subTask = this.subTasksRepository.create(createSubTaskDto);
    return await this.subTasksRepository.save(subTask);
  }

  async findByTask(taskId: string) {
    return await this.subTasksRepository.find({
      where: { task_id: taskId },
      order: { order: 'ASC' },
    });
  }

  async update(id: string, updateSubTaskDto: UpdateSubTaskDto) {
    await this.subTasksRepository.update(id, updateSubTaskDto);
    return this.subTasksRepository.findOne({ where: { id } });
  }

  async delete(id: string) {
    await this.subTasksRepository.delete(id);
  }
}
