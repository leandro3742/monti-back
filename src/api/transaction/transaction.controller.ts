import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly TransactionService: TransactionService) { }

  @Get('get')
  public get() {
    return this.TransactionService.get();
  }

  @Post('create')
  public create(@Body() body: CreateTransactionDto) {
    return this.TransactionService.create(body);
  }
}
