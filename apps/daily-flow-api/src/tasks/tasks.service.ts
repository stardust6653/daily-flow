import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(userId: string, createTaskDto: CreateTaskDto) {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      user_id: userId,
    });
    return await this.tasksRepository.save(task);
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
    await this.tasksRepository.update(id, updateTaskDto);
    return this.tasksRepository.findOne({
      where: { id },
      relations: ['subtasks'],
    });
  }

  async delete(id: string) {
    await this.tasksRepository.delete(id);
  }
}
