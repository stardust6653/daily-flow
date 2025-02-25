import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateSubTaskDto {
  @IsString()
  task_id: string;

  @IsString()
  task: string;

  @IsBoolean()
  complete: boolean;

  @IsNumber()
  order: number;
}
