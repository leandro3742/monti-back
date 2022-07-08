import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientDto } from './client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly clientService: ClientService) { }

  @Get('')
  public get() {
    return this.clientService.get();
  }
  @Post('create')
  public create(@Body() body: CreateClientDto) {
    return this.clientService.create(body);
  }
}
