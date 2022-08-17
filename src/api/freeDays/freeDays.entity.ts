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
export class FreeDays {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public day: string;

  @Column({ type: 'varchar', length: 120 })
  public month: string;

  @Column({ type: 'varchar', length: 120 })
  public year: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @ManyToOne(() => Employee, (employee) => employee.schedules)
  employee: Employee;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
