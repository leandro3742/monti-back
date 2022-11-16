import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './admin.dto';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  @InjectRepository(Admin)
  private readonly repository: Repository<Admin>;

  public get() {
    return this.repository.find();
  }

  public getEmails(){
    return this.repository
    .createQueryBuilder("admin")
    .select("admin.email")
    .getMany()
  }
  public login(body: any) {
    return this.repository.findOne({ where: { email: body.email, password: body.password } })
  }
  public create(body: CreateAdminDto) {
    return this.repository.save(body);
  }
}
