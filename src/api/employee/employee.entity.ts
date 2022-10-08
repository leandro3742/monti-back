import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserRole } from '../enums';
import { FreeDays } from '../freeDays/freeDays.entity';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public lastName: string;

  @Column({ type: 'varchar', length: 120 })
  public ci: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  public mobilePhone: string;

  @Column({ type: 'varchar', length: 120 })
  public password: string;

  @Column({ type: 'integer', nullable: true })
  public start: number;

  @Column({ type: 'integer', nullable: true })
  public finish: number;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public company: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.EMPLOYEE })
  public role: string;

  @OneToMany(() => Schedule, (schedule) => schedule.employee)
  public schedules: Schedule[];

  @OneToMany(() => FreeDays, (freeDays) => freeDays.employee)
  public freeDays: FreeDays[];

  @Column({ type: 'jsonb' })
  public timetable: object;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
