import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubTasksService } from './sub-task.service';
import { CreateSubTaskDto } from './dto/create-sub-task.dto';
import { UpdateSubTaskDto } from './dto/update-sub-task.dto';

@Controller('subtasks')
@UseGuards(JwtAuthGuard)
export class SubTasksController {
  constructor(private readonly subTasksService: SubTasksService) {}

  @Post()
  create(@Body() createSubTaskDto: CreateSubTaskDto) {
    return this.subTasksService.create(createSubTaskDto);
  }

  @Get('task/:taskId')
  findByTask(@Param('taskId') taskId: string) {
    return this.subTasksService.findByTask(taskId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSubTaskDto: UpdateSubTaskDto) {
    return this.subTasksService.update(id, updateSubTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.subTasksService.delete(id);
  }
}
