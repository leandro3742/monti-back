import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ScheduleModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule { }
