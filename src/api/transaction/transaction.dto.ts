import { IsNumber, IsString } from 'class-validator';
import { Business } from '../business/business.entity';

export class CreateTransactionDto {
  @IsString()
  public type: string;

  @IsString()
  public value: number;

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
