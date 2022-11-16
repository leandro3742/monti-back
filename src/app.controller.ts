/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from './api/transaction/transaction.service';
import { AppService } from './app.service';
TransactionService
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly transaction: TransactionService) { }

  @Get('a')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('a/:id')
  getA(@Param() params): string {
    return params.id
  }
}
