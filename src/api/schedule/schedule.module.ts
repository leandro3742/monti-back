import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { EmployeeModule } from '../employee/employee.module';
import { ClientModule } from '../client/client.module';
import { AdminModule } from '../admin/admin.module';
@Module({
  imports: [TypeOrmModule.forFeature([Schedule]), EmployeeModule, ClientModule, AdminModule],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
// eslint-disable-next-line prettier/prettier
export class ScheduleModule { }