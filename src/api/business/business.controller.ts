import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, Param, Put, Delete } from '@nestjs/common';
import { response } from 'express';
import { CreateBusinessDto } from './business.dto';
import { BusinessService } from './business.service';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) { }

  @Get('get')
  public get() {
    return this.businessService.get();
  }

  @Get('getProducts/:name')
  public async getProducts(@Res() response, @Param('name') name: string) {

    let resp = await this.businessService.getProducts(name);
    if (resp == null) {
      return response.status(HttpStatus.NOT_FOUND).send({ data: 'Business not found', status: HttpStatus.NOT_FOUND });
    }
    return response.status(HttpStatus.OK).send({ data: resp, status: HttpStatus.OK });
  }

  @Get('getTransactions/:name/:day/:month/:year')
  public async getTransactions(@Res() response, @Param('name') name: string, @Param('day') day: string, @Param('month') month: string, @Param('year') year: string) {
    let res = await this.businessService.getTransactions(name, `${year}-${month}-${day}`);
    if (res == null) {
      return response.status(HttpStatus.NOT_FOUND).send({ data: [], status: HttpStatus.NOT_FOUND });
    }
    return response.status(HttpStatus.OK).send({ data: res, status: HttpStatus.OK });
  }

  @Get('getTransactionsByMonth/:name/:month/:year')
  public async getTransactionsByMonth(@Res() response, @Param('name') name: string, @Param('month') month: string, @Param('year') year: string) {
    let res = await this.businessService.getTransactionsByMonth(name, `${year}-${month}`);
    console.log(res)
    if (res == null) {
      return response.status(HttpStatus.NOT_FOUND).send({ data: [], status: HttpStatus.NOT_FOUND });
    }
    return response.status(HttpStatus.OK).send({ data: res, status: HttpStatus.OK });
  }

}
