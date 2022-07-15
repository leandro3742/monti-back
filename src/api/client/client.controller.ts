import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateClientDto } from './client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  // eslint-disable-next-line prettier/prettier
  constructor(readonly clientService: ClientService) { }

  @Get('get')
  public getAll() {
    return this.clientService.getClients();
  }

  @Get('get/:ci')
  public async getClient(@Res() response, @Param('ci') ci: string) {
    let client = await this.clientService.getClient(ci);
    if (client) return response.status(HttpStatus.CREATED).send({ data: client, status: HttpStatus.CREATED })
    return response.status(HttpStatus.NOT_ACCEPTABLE).send({ data: "El usuario no existe", status: HttpStatus.NOT_ACCEPTABLE });
  }

  @Post('create')
  public create(@Body() body: CreateClientDto) {
    return this.clientService.create(body);
  }
}
