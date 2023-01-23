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

  public async createSales(sales: Array<SaleDto>, business: string) {
    let transactions = [];
    let minutes;
    new Date().getMinutes() < 10 ? minutes = '0' + new Date().getMinutes() : minutes = new Date().getMinutes()
    for (let sale of sales) {
      let transaction = new Transaction();
      transaction.type = 'Venta';
      transaction.value = sale.price;
      transaction.day = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
      transaction.hour = new Date().getHours() + ':' + minutes;
      transaction.business = business;
      transactions.push(transaction);
    }
    return await this.repository.save(transactions)
  }
}
