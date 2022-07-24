import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  @InjectRepository(Schedule)
  private readonly repository: Repository<Schedule>;

  public get() {
    return this.repository.find();
  }
  public getSchedule(body: any) {
    return this.repository.find({
      where: {
        day: body.day,
        month: body.month,
        year: body.year,
        employee: body.employee,
      },
    });
  }

  public avaiableTime(body: any) {
    return this.repository.find({
      where: {
        day: body.day,
        month: body.month,
        year: body.year,
        employee: body.employee,
        start: body.satart,
        end: body.end
      }
    })
  }
  public create(body: CreateScheduleDto) {
    return this.repository.save(body);
  }

  // public createUser(body: CreateUserDto): Promise<User> {
  //   const user: User = new User();

  //   user.name = body.name;
  //   user.email = body.email;

  //   return this.repository.save(user);
  // }
}
