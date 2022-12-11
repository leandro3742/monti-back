import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './products/product.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [AdminModule, TransactionModule, ProductModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule {}
