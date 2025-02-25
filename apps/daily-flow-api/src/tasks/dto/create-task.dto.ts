import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';

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
}
