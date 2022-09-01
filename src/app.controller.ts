/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeModule } from './api/employee/employee.module';
import { EmployeeService } from './api/employee/employee.service';
import { AppService } from './app.service';
import { Subject } from './common/utils/dictionary';
import { sendEmail } from './common/utils/email';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly employeeService: EmployeeService) { }

  @Get('a')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/")
  async A(){
    // await sendEmail(['leandro.marrero03@gmail.com'], Subject['Create reserve'], {
    //   name: 'Leandro',
    //   lastName: 'Marrero',
    //   employee: {
    //     name: 'Flavio',
    //     lastName: 'Scagni'
    //   },
    //   start: '07:00',
    //   end: '8:00',
    //   day: '22',
    //   month: '08',
    //   year: '2022'
    // });
  }  
  @Get('a/:id')
  getA(@Param() params): string {
    return params.id
  }
}
