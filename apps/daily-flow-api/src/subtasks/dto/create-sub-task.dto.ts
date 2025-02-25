import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateSubTaskDto {
  @IsString()
  @IsOptional() // CreateTaskDto에서 넘길 때는 없지만, SubTaskService에서는 필요
  task_id?: string;

  @IsString()
  task: string;

  @IsBoolean()
  @IsOptional()
  complete?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;
}
