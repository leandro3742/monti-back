import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  @InjectRepository(Employee)
  private readonly repository: Repository<Employee>;

  public get() {
    return this.repository.find();
  }

  public create(body: CreateEmployeeDto) {
    return this.repository.save(body);
  }

  // public createUser(body: CreateUserDto): Promise<User> {
  //   const user: User = new User();

  //   user.name = body.name;
  //   user.email = body.email;

  //   return this.repository.save(user);
  // }
}
