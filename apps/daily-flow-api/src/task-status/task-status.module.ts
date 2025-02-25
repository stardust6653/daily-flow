// src/task-status/task-status.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { TaskStatusController } from './task-status.controller';
import { TaskStatusService } from './task-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskStatus])],
  controllers: [TaskStatusController],
  providers: [TaskStatusService],
  exports: [TaskStatusService],
})
export class TaskStatusModule {}
