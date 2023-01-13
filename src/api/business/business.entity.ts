import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

import { Product } from '../products/product.entity';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class Business {

  @PrimaryColumn({ type: 'varchar', length: 120 })
  public name: string;

  @OneToMany(() => Product, (product) => product.business)
  @JoinTable()
  public products: Product[];

  @OneToMany(() => Transaction, (transaction) => transaction.business)
  @JoinTable()
  public transactions: Transaction[];
}
