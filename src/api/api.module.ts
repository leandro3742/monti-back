import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { ScheduleModule } from './schedule/schedule.module';
@Module({
  imports: [ScheduleModule, ClientModule, EmployeeModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule { }
