import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository, Timestamp } from 'typeorm';
import { CreateBusinessDto } from './business.dto';
import { Business } from './business.entity';

@Injectable()
export class BusinessService {
  @InjectRepository(Business)
  private readonly repository: Repository<Business>;

  public async get() {
    const count = await this.repository.count();
    return this.repository.find({
      relations: ['products', 'transactions']
    });
  }

  public async getProducts(name: string) {
    return this.repository.findOne({ relations: ['products'], where: { name: name } });;
  }

  public async getTransactions(name: string, day: string) {
    let response = await this.repository.createQueryBuilder('business')
      .leftJoinAndSelect('business.transactions', 'transactions')
      .where('business.name = :name', { name: name })
      .andWhere('transactions.day = :day', { day: day })
      .getOne();
    return response;
  }

  public async getTransactionsByMonth(name: string, month: string) {
    let response = await this.repository.createQueryBuilder('business')
      .leftJoinAndSelect('business.transactions', 'transactions')
      .where('business.name = :name', { name: name })
      .andWhere('transactions.day LIKE :month', { month: `${month}%` })
      .getOne();
    return response;
  }
}
