import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  public type: string;

  @IsString()
  public value: number;

  @IsString()
  public hour: string
}
