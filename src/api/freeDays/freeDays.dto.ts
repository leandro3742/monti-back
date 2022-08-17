import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Employee } from '../employee/employee.entity';
import { Client } from '../client/client.entity';
export class CreateScheduleDto {
  @IsString()
  @IsNotEmpty()
  public day: string;

  @IsString()
  @IsNotEmpty()
  public month: string;

  @IsString()
  @IsNotEmpty()
  public year: string;

  @IsNumber()
  @IsNotEmpty()
  public employee: Employee;
}
