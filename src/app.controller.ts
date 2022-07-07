/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('a')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('a/:id')
  getA(@Param() params): string {
    return params.id
  }
}
