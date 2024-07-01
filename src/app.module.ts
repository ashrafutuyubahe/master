import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BookManipulateService } from './book-manipulate/book-manipulate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      entities:[],
      database: 'first_nest_app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule
  ],
  controllers: [BooksController],
   providers: [BookManipulateService],
 



})
export class AppModule {}
