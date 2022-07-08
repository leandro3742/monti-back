import { IsEmail, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { User } from '../user/user.entity';

export class CreateEmployeeDto {
  @IsString()
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public ci: string;

  @IsString()
  @IsNotEmpty()
  public mobilePhone: string;

  @IsString()
  @IsNotEmpty()
  public role: string;
}
