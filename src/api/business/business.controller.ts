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
  public getProducts(@Param('name') name: string) {
    return this.businessService.getProducts(name);
  }

  @Get('getTransactions/:name/:day/:month/:year')
  public getTransactions(@Param('name') name: string, @Param('day') day: string, @Param('month') month: string, @Param('year') year: string) {
    return this.businessService.getTransactions(name, `${year}-${month}-${day}`);
  }
}
