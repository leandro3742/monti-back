/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('getUser/:ci')
  public getUser(@Param('ci', ParseIntPipe) ci: string) {
    return this.userService.getUser(ci);
  }

  @Get('getClient')
  public getClient() {
    return this.userService.getClients();
  }

  @Get('getEmployee')
  public getEmployee() {
    return this.userService.getEmployees();
  }

  @Post('createUser')
  public createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Delete('delete/:id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }
}
