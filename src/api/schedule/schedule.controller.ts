import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Subject } from 'src/common/utils/dictionary';
import { sendEmail } from 'src/common/utils/email';
import { AdminService } from '../admin/admin.service';
import { ClientService } from '../client/client.service';
import { EmployeeController } from '../employee/employee.controller';
import { EmployeeService } from '../employee/employee.service';
import { CreateScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly scheduleService: ScheduleService, private readonly employeeService: EmployeeService, private readonly clientService: ClientService, private readonly adminService: AdminService) { }

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

  @Get('/cantLessons/:id')
  public  async getCantLessons(@Res() response, @Param('id') id: number){
    let resp = await this.scheduleService.cantLesson(id)
    if(resp){
      return response.status(HttpStatus.OK).send({ data: resp[0], status: HttpStatus.OK })
    }
    else
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "Ocurrio un error, vuelva a intentarlo", status: HttpStatus.NOT_ACCEPTABLE })
  }
  
  @Get('getReport/:year/:month/:employeeId')
  public async getReport(@Res() response, @Param() params: any){
    let canceledReports = await this.scheduleService.getReport(params.employeeId, params.year, params.month, true)
    let canceled = canceledReports[0].count 
    let completedReports = await this.scheduleService.getReport(params.employeeId, params.year, params.month, false)
    let completed = completedReports[0].count 
    return response.status(HttpStatus.OK).send({ 
      data: {
        'Cantidad de horas trabajadas': completed,
        'Cantidad de horas canceladas': canceled
      }, 
      status: HttpStatus.OK 
    })
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
      let employee = await this.employeeService.getSingle(body.employee.toString());
      let client = await this.clientService.getClientById(parseInt(body.client.toString()));

      let emails = []
      let adminEmails = await this.adminService.getEmails();
      for(let i in adminEmails){
        emails.push(adminEmails[i].email)
      }
      if(client.email) emails.push(client.email) //if client have email => send reserve
      sendEmail(emails, Subject['Create reserve'], {
        name: client.name,
        lastName: client.lastName,
        employee: {
          name: employee.name,
          lastName: employee.lastName
        },
        start: body.start,
        end: body.end,
        day: body.day,
        month: body.month,
        year: body.year
      })
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
