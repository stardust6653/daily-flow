import { IsString } from 'class-validator';

export class CreateTaskStatusDto {
  @IsString()
  category_id: string;

  @IsString()
  label: string;

  @IsString()
  color: string;

  @IsString()
  sub_color: string;
}
