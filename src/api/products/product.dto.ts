import { IsNumber, IsNumberString, IsString } from 'class-validator';
import { Business } from '../business/business.entity';

export class CreateProductDto {
  @IsString()
  public name: string;
  @IsNumber()
  public stock: number;
  @IsNumber()
  public price: number;
  @IsNumber()
  public code: number;
  @IsString()
  public business: Business;
}