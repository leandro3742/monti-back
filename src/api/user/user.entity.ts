import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserRole } from '../enums';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class User {
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

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CLIENT })
  public role: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  public schedules: Schedule[];

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
