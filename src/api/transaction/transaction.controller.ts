import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, Param } from '@nestjs/common';
import { response } from 'express';
import { CreateTransactionDto, SaleDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly TransactionService: TransactionService) { }

  @Get('get')
  public get() {
    return this.TransactionService.get();
  }

  @Get('get/:day/:month/:year')
  public getByDay(@Param() params: any) {
    
    return this.TransactionService.getByDay(params);
  }

  @Post('create')
  public create(@Body() body: CreateTransactionDto) {
    return this.TransactionService.create(body);
  }

  @Post('create/sales')
  public async createSales(@Res() response, @Body() body: {sales: Array<CreateTransactionDto>}) {
    let resp = await this.TransactionService.createSales(body.sales);
    if(resp == null){
      return response.status(HttpStatus.NOT_FOUND).send({data: 'Business not found', status: HttpStatus.NOT_FOUND});
    }
    return response.status(HttpStatus.OK).send({data: resp, status: HttpStatus.OK});
  }
  
}
