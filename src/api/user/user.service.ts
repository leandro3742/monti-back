import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from '../enums';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUser(ci: string) {
    return this.repository.find({
      where: { ci: ci, isDeleted: false },
    });
  }

  public getEmployees() {
    return this.repository.find({
      where: { role: UserRole.EMPLOYEE, isDeleted: false },
    });
  }

  public getClients() {
    return this.repository.find({ where: { role: UserRole.CLIENT } });
  }

  public create(body: CreateUserDto) {
    return this.repository.save(body);
  }

  public delete(id: number) {
    return this.repository
      .createQueryBuilder()
      .update(User)
      .set({ isDeleted: true })
      .where({ id: id })
      .execute();
  }
}
