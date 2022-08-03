import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post('getSchedule')
  public async getSchedule(@Res() response, @Body() body: any) {
    let reserve = await this.scheduleService.getSchedule(body);
    if(reserve){
      return response.status(HttpStatus.OK).send({ data: reserve, status: HttpStatus.OK })
    }
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "ocurrio un error, vuelva a intentarlo", status: HttpStatus.NOT_FOUND })

    // return this.scheduleService.getSchedule(body);
  }

  @Get('')
  public get() {
    
    return this.scheduleService.get();
  }

  @Delete('/delete/:id')
  public async delete(@Res() response, @Param('id') id: number){
    let reserve = await this.scheduleService.getSingleReserve(id);
    if(reserve){
      let deleteReserve = await this.scheduleService.deleteReserve(reserve);
      if(deleteReserve){
        return response.status(HttpStatus.OK).send({ data: "La reserva fue eliminada con éxito", status: HttpStatus.OK })
      }
      return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "Ocurrió un error, intentelo más tarde", status: HttpStatus.NOT_ACCEPTABLE })
    }
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "La reserva no existe", status: HttpStatus.NOT_ACCEPTABLE })
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
