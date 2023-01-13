import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, Param, Put, Delete } from '@nestjs/common';
import { response } from 'express';
import { CreateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly ProductService: ProductService) { }

  @Get('get')
  public get() {
    return this.ProductService.get();
  }

  @Get('get/filter/:business/:filter')
  public getByFilter(@Param('filter') filter: string, @Param('business') business: string) {
    return this.ProductService.getByFilter(filter);
  }

  @Post('create')
  public create(@Body() body: CreateProductDto) {
    return this.ProductService.create(body);
  }

  @Delete('delete/:name')
  public delete(@Param('name') name: string) {
    return this.ProductService.delete(name);
  }
  
  @Put('update/:business/:name')
  public update(@Param('name') name: string, @Param('business') business: string ,@Body() body: CreateProductDto) {
    return this.ProductService.update(name, business, body);
  }

}
