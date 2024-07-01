import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookManipulateService } from 'src/book-manipulate/book-manipulate.service';

@Controller()


export class BooksController {
 constructor( private readonly bookService:BookManipulateService){}
  @Get('books')
  findAllBooks(){
  return this.bookService.findAllBooks;

  }

  @Post('addBook')
   addBook(@Body('id') id:string,@Body('name') name:string ): string{
    this.addBook(id,name);
    return`this is the new book added ${name} with id${id}`;

}

@Put('id')
removeBook(@Param('id') id:String){



}
}
