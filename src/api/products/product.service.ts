import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository, Timestamp } from 'typeorm';
import { CreateProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly repository: Repository<Product>;

  public async get() {
    const count = await this.repository.count();
    // console.log(count)
    return this.repository.find();
  }
  
  public async getByBusiness(id: string) {
    return this.repository.createQueryBuilder('product')
      .leftJoinAndSelect('product.business', 'business')
      .where('business.name = :id', { id: id })
      .getMany();
  }

  public async getByFilter(filter: string) {
    return this.repository.find({where: {name: ILike('%' + filter + '%')}});
  }

  public create(body: CreateProductDto) {
    return this.repository.save(body);
  }

  public async delete(name: string) {
    const product = await this.repository.findOne({ where: { name: name } });
    if (!product) {
      throw new HttpException('Product not found', 404);
    }
    return this.repository.delete({name: name});
  }

  public async update(name: string, business: string, body: CreateProductDto) {
    return await this.repository.createQueryBuilder()
      .update(Product)
      .set({ name: body.name, stock: body.stock, price: body.price })
      .where('name = :name', { name: name })
      .andWhere('business.name = :business', { business: business })      
      .execute();
  }
}
