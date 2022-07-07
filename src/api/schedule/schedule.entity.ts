import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';

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
  public isDeleted: boolean;

  @ManyToOne(() => User, (user) => user.id)
  client: User;

  @ManyToOne(() => User, (user) => user.id)
  employee: User;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
