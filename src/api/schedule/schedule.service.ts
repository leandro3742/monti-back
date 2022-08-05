import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client/client.entity';
import { CreateScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  @InjectRepository(Schedule)
  private readonly repository: Repository<Schedule>;

  public get() {
    return this.repository.find();
  }
  
  public getSingleReserve(id: number){
    return this.repository.findOne({where: {id: id}})
  }

  public deleteReserve(reserve: Schedule){
    // return this.repository
    // .createQueryBuilder()
    // .delete()
    // .where("id = :id", {id: id})
    // .execute()
    return this.repository.remove(reserve)
  }

  public async getSchedule(body: any) {
    return this.repository
      .createQueryBuilder("schedule")
      .leftJoinAndSelect("schedule.client", "name")
      .where("schedule.day = :day", {day: body.day})
      .andWhere("schedule.month = :month", {month: body.month})
      .andWhere("schedule.year = :year", {year: body.year})
      .andWhere("schedule.employee = :employee", {employee: body.employee})
      .getMany()
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

  public cantLesson(id: number) {
    return this.repository
      .createQueryBuilder('schedule')
      .select('COUNT(schedule.id)')
      .where("schedule.clientId = :id", { id: id })
      .execute()
  }
}
