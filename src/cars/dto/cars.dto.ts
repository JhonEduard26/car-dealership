import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCarDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;
}

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}
