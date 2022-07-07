import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  public employeeId: string;

  @IsNumber()
  @IsNotEmpty()
  public clientId: string;

  @IsString()
  @IsNotEmpty()
  public start: string;

  @IsString()
  @IsNotEmpty()
  public end: string;
}
