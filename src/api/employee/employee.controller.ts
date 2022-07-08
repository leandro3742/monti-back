import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly employeeService: EmployeeService) { }

  @Get('')
  public get() {
    return this.employeeService.get();
  }
  @Post('create')
  public create(@Body() body: CreateEmployeeDto) {
    return this.employeeService.create(body);
  }
}
