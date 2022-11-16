import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [AdminModule, TransactionModule],
})
// eslint-disable-next-line prettier/prettier
export class ApiModule {}
