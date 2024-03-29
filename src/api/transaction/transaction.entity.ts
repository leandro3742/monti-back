import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Business } from '../business/business.entity';
import { UserRole } from '../enums';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public type: string;

  @Column({ type: 'real' })
  public value: number;

  @Column({ type: 'varchar' })
  public hour: string;

  @Column({ type: 'varchar' })
  public day: string;

  @Column({type: 'varchar', nullable: true})
  public product: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @ManyToOne(() => Business, (business) => business.transactions)
  public business: string;
}
