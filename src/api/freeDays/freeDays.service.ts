import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client/client.entity';
import { CreateScheduleDto } from './freeDays.dto';
import { FreeDays } from './freeDays.entity';

@Injectable()
export class FreeDaysService {
  @InjectRepository(FreeDays)
  private readonly repository: Repository<FreeDays>;
  
  public async get(body: any) {
    return this.repository
      .createQueryBuilder("freeDays")
      .where("freeDays.day = :day", {day: body.day})
      .andWhere("freeDays.month = :month", {month: body.month})
      .andWhere("freeDays.year = :year", {year: body.year})
      .andWhere("freeDays.employee = :employee", {employee: body.employee})
      .andWhere("freeDays.isDeleted = false")
      .getMany()
  }

  public async getAll(id: number) {
    return this.repository
      .createQueryBuilder("freeDays")
      .where("freeDays.employee = :employee", {employee: '6'})
      .andWhere("freeDays.isDeleted = false")
      .getMany()
  }

  public create(body: CreateScheduleDto) {
    return this.repository.save(body);
  }

}
