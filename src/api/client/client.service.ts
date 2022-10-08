import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateClientDto } from './client.dto';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  @InjectRepository(Client)
  private readonly repository: Repository<Client>;

  public getClients(company: string) {
    return this.repository     
    .createQueryBuilder('client')
    .leftJoinAndSelect("client.schedules", "schedule")
    .where("client.isDeleted = :isDeleted", { isDeleted: false })
    .andWhere('client.company = :company', { company: company})
    .getMany();
    // return this.repository.find({where: {isDeleted: false}});
  }

  public getClient(ci: string) {
    return this.repository.findOne({ where: { ci: ci } });
  }

  public getClientById(id: number) {
    return this.repository.findOne({ where: { id: id } });
  }

  public create(body: CreateClientDto) {
    return this.repository.save(body);
  }

  public update(body: CreateClientDto) {
    return this.repository
      .createQueryBuilder()
      .update('client')
      .set({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        mobilePhone: body.mobilePhone 
      })
      .where('ci = :id', {id : body.ci })
      .execute();
  }

  public delete(id: string) {
    return this.repository
      .createQueryBuilder()
      .update('client')
      .set({isDeleted: true })
      .where('id = :id', {id : id })
      .execute();
  }

  public findClient(value: string) {
    return this.repository.find({
      where: [
        {
          name: Like(`%${value}%`)
        },
        {
          lastName: Like(`%${value}%`)
        }
      ]
    })
  }
  // public createUser(body: CreateUserDto): Promise<User> {
  //   const user: User = new User();

  //   user.name = body.name;
  //   user.email = body.email;

  //   return this.repository.save(user);
  // }
}
