import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public day: string;

  @Column({ type: 'varchar', length: 120 })
  public month: string;

  @Column({ type: 'varchar', length: 120 })
  public year: string;

  @Column({ type: 'varchar', length: 120 })
  public start: string;

  @Column({ type: 'varchar', length: 120 })
  public end: string;

  @Column({ type: 'boolean', default: false })
  public paidOff: string;

  @Column({ type: 'varchar', length: 120 })
  public address: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @ManyToOne(() => Client, (client) => client.schedules)
  client: Client;

  @ManyToOne(() => Employee, (employee) => employee.schedules)
  employee: Employee;


  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
