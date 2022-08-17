import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreeDays } from './freeDays.entity';
import { FreeDaysService } from './freeDays.service';
import { FreeDaysController } from './freeDays.controller';
@Module({
  imports: [TypeOrmModule.forFeature([FreeDays])],
  controllers: [FreeDaysController],
  providers: [FreeDaysService],
})
// eslint-disable-next-line prettier/prettier
export class FreeDaysModule { }