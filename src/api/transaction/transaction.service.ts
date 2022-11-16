import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  @InjectRepository(Transaction)
  private readonly repository: Repository<Transaction>;

  public get() {
    return this.repository.find();
  }

  public create(body: any) {
    return this.repository.save(body);
  }
}
