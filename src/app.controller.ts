/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { sendEmail } from './common/utils/email';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('a')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/")
  async A(){
    await sendEmail(['leandro.marrero03@gmail.com']);
  }  
  @Get('a/:id')
  getA(@Param() params): string {
    return params.id
  }
}
