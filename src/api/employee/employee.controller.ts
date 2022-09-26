import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateEmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly employeeService: EmployeeService) { }

  @Get('get')
  public get() {
    return this.employeeService.get();
  }
  @Get('get/:id')
  public getSingle(@Param() id: any) {
    return this.employeeService.getSingle(id.id);
  }
  @Post('login')
  public async login(@Res() response, @Body() body: any) {
    let employee = await this.employeeService.login(body);
    if (employee) return response.status(HttpStatus.CREATED).send({ data: employee, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario y la contraseña no coinciden", status: HttpStatus.NOT_ACCEPTABLE });
  }


  @Put('update')
  public async update(@Res() response, @Body() body: any) {
    let employee = await this.employeeService.update(body);
    if (employee) return response.status(HttpStatus.OK).send({ data: employee, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "Ocurrio un error cuando modificabamos los datos", status: HttpStatus.NOT_ACCEPTABLE });
  }

  @Post('create')
  public create(@Body() body: CreateEmployeeDto) {
    return this.employeeService.create(body);

  }

  @Get('find')
  public async findAll() {
    let clients = await this.employeeService.get();
    return clients
  }

  @Get('find/:value')
  public async find(@Param('value') value: string) {
    let clients = await this.employeeService.findEmployee(value);
    return clients
  }
}
