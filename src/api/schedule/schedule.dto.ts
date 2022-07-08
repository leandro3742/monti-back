import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { User } from '../user/user.entity';

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
  public user: User;

  // @IsNumber()
  // @IsNotEmpty()
  // public clientId: string;

  @IsString()
  @IsNotEmpty()
  public start: string;

  @IsString()
  @IsNotEmpty()
  public end: string;
}
