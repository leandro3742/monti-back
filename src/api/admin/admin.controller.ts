import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateAdminDto } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly AdminService: AdminService) { }

  @Get('get')
  public get() {
    return this.AdminService.get();
  }

  @Post('login')
  public async login(@Res() response, @Body() body: any) {
    let Admin = await this.AdminService.login(body);
    if (Admin) return response.status(HttpStatus.CREATED).send({ data: Admin, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario y la contraseña no coinciden", status: HttpStatus.NOT_ACCEPTABLE });
  }

  @Post('create')
  public create(@Body() body: CreateAdminDto) {
    return this.AdminService.create(body);

  }
}
