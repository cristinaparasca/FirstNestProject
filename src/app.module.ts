import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import{TypeOrmModule} from '@nestjs/typeorm';
import {config} from './config/orm.config'
import { UserModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot(config),ProductsModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
