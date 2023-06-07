import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCarDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsString()
  brand: string;

  @IsString()
  model: string;
}
