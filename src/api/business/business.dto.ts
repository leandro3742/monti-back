import { IsNumber, IsNumberString, IsString, Validate } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  public name: string;
  @IsNumber()
  public stock: number;
  @IsNumber()
  public price: number;

}