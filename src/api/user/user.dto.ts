import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
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
