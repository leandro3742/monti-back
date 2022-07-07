import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post('getSchedule')
  public getSchedule(@Body() body: any) {
    return this.scheduleService.getSchedule(body);
  }

  @Get('')
  public get() {
    return this.scheduleService.get();
  }
  @Post('create')
  public create(@Body() body: CreateScheduleDto) {
    return this.scheduleService.create(body);
  }
}
