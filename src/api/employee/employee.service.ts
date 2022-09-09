import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmail, isMobilePhone } from 'class-validator';
import { Like, Repository } from 'typeorm';
import { CreateEmployeeDto } from './employee.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  @InjectRepository(Employee)
  private readonly repository: Repository<Employee>;

  public get() {
    return this.repository.find();
  }

  public getSingle(id:any) {
    return this.repository.findOneBy({id: id});
  }

  public login(body: any) {
    return this.repository.findOne({ where: { ci: body.ci, password: body.password } })
  }
  public create(body: CreateEmployeeDto) {
    return this.repository.save(body);
  }

  public update(body:any) {
    return this.repository
    .createQueryBuilder()
    .update('employee')
    .set({
      mobilePhone: body.mobilePhone,
      email: body.email,
      password: body.password, 
      start: body.start,
      finish: body.finish
    })
    .where("id = :employeeId", {employeeId: body.id})
    .execute();
  }

  public findEmployee(value: string) {
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
}
