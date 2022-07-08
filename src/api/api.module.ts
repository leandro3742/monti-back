import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ScheduleModule, EmployeeModule, ClientModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule { }
