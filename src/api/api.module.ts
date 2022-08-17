import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AdminModule } from './admin/admin.module';
import { FreeDaysModule } from './freeDays/freeDays.module';
@Module({
  imports: [ScheduleModule, ClientModule, EmployeeModule, AdminModule, FreeDaysModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule { }
