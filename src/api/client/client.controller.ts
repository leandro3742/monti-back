import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateClientDto } from './client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  // eslint-disable-next-line prettier/prettier
  constructor(readonly clientService: ClientService) { }

  @Get('getByCompany/:company')
  public async getAll(@Param('company') company: string) {
    let clients = await this.clientService.getClients(company);
    let arr = []
    for(let i in clients){
      let cant = 0
      for(let j in clients[i].schedules){
        if(clients[i].schedules[j].isDeleted === false)
          cant++;
      }
      delete clients[i].schedules;
      arr.push({...clients[i], cantLessons: cant})
    }
    return arr
  }

  @Get('get/:ci')
  public async getClient(@Res() response, @Param('ci') ci: string) {
    let client = await this.clientService.getClient(ci);
    if (client) return response.status(HttpStatus.CREATED).send({ data: client, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario no existe", status: HttpStatus.NOT_ACCEPTABLE });
  }

  @Put('update')
  public async update(@Res() response, @Body() body: CreateClientDto){
    let client = await this.clientService.update(body);
    if (client) return response.status(HttpStatus.CREATED).send({ data: client, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "Ocurrió un error al intentar crear el usuario", status: HttpStatus.NOT_ACCEPTABLE });
  }

  @Post('create')
  public async create(@Res() response, @Body() body: CreateClientDto) {
    let client = await this.clientService.create(body);
    if (client) return response.status(HttpStatus.CREATED).send({ data: client, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "Ocurrió un error al intentar crear el usuario", status: HttpStatus.NOT_ACCEPTABLE });

    return this.clientService.create(body);
  }

  @Get('findByCompany/:company')
  public async findAll(@Param('company') company: string) {
    let clients = await this.clientService.getClients(company);
    return clients
  }

  @Get('find/:value')
  public async find(@Param('value') value: string) {
    let clients = await this.clientService.findClient(value);
    return clients
  }

  @Delete('/delete/:id')
  public async delete(@Res() response, @Param('id') id: string){
    let client = await this.clientService.delete(id)
    if (client.affected !== 0) return response.status(HttpStatus.OK).send({ data: client, status: HttpStatus.OK })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario no existe", status: HttpStatus.NOT_ACCEPTABLE });
  }
}
