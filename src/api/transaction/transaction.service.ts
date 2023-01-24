import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, Timestamp } from 'typeorm';
import { CreateTransactionDto, DTDay, SaleDto } from './transaction.dto';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  @InjectRepository(Transaction)
  private readonly repository: Repository<Transaction>;

  public get() {
    return this.repository.find();
  }
  public async getByDay(date: DTDay) {
    let day = `${date.year}-${date.month}-${date.day}`;
    return await this.repository.find({ where: {day: day} });
    
  }

  public create(body: any) {
    return this.repository.save(body);
  }

  public async createSales(sales: Array<CreateTransactionDto>) {
    let transactions = [];
    for(let sale of sales){
      transactions.push(sale);
    }
    return await this.repository.save(transactions)
  }
}
