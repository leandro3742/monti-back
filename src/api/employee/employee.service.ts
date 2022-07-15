import { HttpException, Injectable } from '@nestjs/common';
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

  public login(body: any) {
    return this.repository.findOne({ where: { ci: body.ci, password: body.password } })
  }
  public create(body: CreateEmployeeDto) {
    return this.repository.save(body);
  }
}
