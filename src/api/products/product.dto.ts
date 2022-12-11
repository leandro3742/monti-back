import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateProductDto {
  public name: string;
  public stock: number;
  public price: number;

}