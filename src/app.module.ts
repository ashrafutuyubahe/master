import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BookManipulateService } from './book-manipulate/book-manipulate.service';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'first_nest_app',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [BooksController],
   providers: [BookManipulateService],
 



})
export class AppModule {}
