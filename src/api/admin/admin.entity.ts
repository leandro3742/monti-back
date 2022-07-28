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

@Entity()
export class Admin {
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

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ADMIN })
  public role: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
