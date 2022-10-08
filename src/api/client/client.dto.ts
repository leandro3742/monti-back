import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;
  
  @IsString()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public ci: string;

  @IsString()
  @IsNotEmpty()
  public mobilePhone: string;z
}
