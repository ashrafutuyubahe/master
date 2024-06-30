import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
// import { BookManipulateService } from './book-manipulate/book-manipulate.service';



@Module({
  imports: [],
  controllers: [BooksController],
  // providers: [BookManipulateService],


})
export class AppModule {}
