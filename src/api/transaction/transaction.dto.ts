import { IsNumber, IsString } from 'class-validator';
import { Business } from '../business/business.entity';

export class CreateTransactionDto {
  @IsString()
  public type: string;

  @IsString()
  public value: number;

  @IsString()
  public product: string;
  
  @IsString()
  public hour: string;

  @IsString()
  public day: string;

  @IsString()
  public business: Business
}

export class DTDay {
  @IsNumber()
  public day: number;

  @IsNumber()
  public month: number;

  @IsNumber()
  public year: number;
}

export class SaleDto{
  @IsString()
  public name: string;

  @IsString()
  public price: number;

  @IsString()
  public day: string

  @IsString()
  public hour: string

  @IsString()
  public business: Business
}