import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;
  @IsString()
  public stock: number;
  @IsString()
  public price: number;

}