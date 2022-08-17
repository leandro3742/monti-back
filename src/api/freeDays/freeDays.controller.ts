import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { FreeDaysDto } from './freeDays.dto';
import { FreeDaysService } from './freeDays.service';

@Controller('freeDays')
export class FreeDaysController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly freeDaysService: FreeDaysService) { }

  @Post('get')
  public async getFreeDays(@Res() response, @Body() body: any) {
    let reserve = await this.freeDaysService.get(body);
    if(reserve){
      return response.status(HttpStatus.OK).send({ data: reserve, status: HttpStatus.OK })
    }
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "ocurrio un error, vuelva a intentarlo", status: HttpStatus.NOT_FOUND })
  }

  @Get('getAll/:id')
  public async getAllFreeDays(@Res() response: any, @Param('id') id: number) {
    let reserve = await this.freeDaysService.getAll(id);
    if(reserve){
      return response.status(HttpStatus.OK).send({ data: reserve, status: HttpStatus.OK })
    }
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "ocurrio un error, vuelva a intentarlo", status: HttpStatus.NOT_FOUND })
  }

  @Post('create')
  public async create(@Res() response, @Body() body: FreeDaysDto) {
    let create = await this.freeDaysService.create(body);
    return response.status(HttpStatus.CREATED).send({ data: create, status: HttpStatus.CREATED })
  }

  @Post('delete')
  public async delete(@Res() response, @Body() body: FreeDaysDto) {
    let deleteFreeDay = await this.freeDaysService.delete(body);
    return response.status(HttpStatus.CREATED).send({ data: deleteFreeDay, status: HttpStatus.CREATED })
  }

  // @Post('login')
  // public async login(@Res() response, @Body() body: any) {
  //   let employee = await this.employeeService.login(body);
  //   if (employee) return response.status(HttpStatus.CREATED).send({ data: employee, status: HttpStatus.CREATED })
  //   return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario y la contraseña no coinciden", status: HttpStatus.NOT_ACCEPTABLE });
  // }
}
