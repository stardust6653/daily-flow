import { Type } from 'class-transformer';
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateSubTaskDto } from 'src/subtasks/dto/create-sub-task.dto';

export class CreateTaskDto {
  @IsString()
  category_id: string;

  @IsString()
  status_id: string;

  @IsString()
  main_task: string;

  @IsString()
  @IsOptional()
  memo?: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  period?: string;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsBoolean()
  @IsOptional()
  complete?: boolean;

  @IsNumber()
  @IsOptional()
  expenditure?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubTaskDto)
  @IsOptional()
  subtasks?: CreateSubTaskDto[];
}
