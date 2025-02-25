import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubTask } from './entities/subtask.entity';
import { SubTasksController } from './sub-task.controller';
import { SubTasksService } from './sub-task.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubTask])],
  controllers: [SubTasksController],
  providers: [SubTasksService],
  exports: [SubTasksService],
})
export class SubTasksModule {}
