import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
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
  public async create(@Res() response, @Body() body: CreateScheduleDto) {
    let avaiable = await this.scheduleService.avaiableTime(body);
    if(avaiable.length === 0){
      let create = await this.scheduleService.create(body);
      return response.status(HttpStatus.CREATED).send({ data: create, status: HttpStatus.CREATED })
    }
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "La hora ya fue reservada", status: HttpStatus.NOT_ACCEPTABLE })

  }

  // @Post('login')
  // public async login(@Res() response, @Body() body: any) {
  //   let employee = await this.employeeService.login(body);
  //   if (employee) return response.status(HttpStatus.CREATED).send({ data: employee, status: HttpStatus.CREATED })
  //   return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario y la contraseña no coinciden", status: HttpStatus.NOT_ACCEPTABLE });
  // }
}
