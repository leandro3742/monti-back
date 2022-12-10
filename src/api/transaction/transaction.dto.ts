import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  public type: string;

  @IsString()
  public value: number;

  @IsString()
  public hour: string;

  @IsString()
  public day: string;
}

export class DTDay {
  @IsNumber()
  public day: number;

  @IsNumber()
  public month: number;

  @IsNumber()
  public year: number;
}
