import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './client.dto';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  @InjectRepository(Client)
  private readonly repository: Repository<Client>;

  public get() {
    return this.repository.find();
  }

  public create(body: CreateClientDto) {
    return this.repository.save(body);
  }

  // public createUser(body: CreateUserDto): Promise<User> {
  //   const user: User = new User();

  //   user.name = body.name;
  //   user.email = body.email;

  //   return this.repository.save(user);
  // }
}
