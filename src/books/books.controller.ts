import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookManipulateService } from '../book-manipulate/book-manipulate.service';


@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookManipulateService) {}

  @Get()
  findAllBooks() {
    return this.bookService.findAllBooks();
  }
  @Get('/getOneBook/:id')
  findSingleBook(@Param('id') id:string){
    return this.bookService.findSingleBook(id);

  }

  @Post('addBook')
  addBook(@Body('id') id: string, @Body('name') name: string): string {
    this.bookService.addBooks(id, name);
    return `This is the new book added: ${name} with id ${id}`;
  }

  @Delete('/removeBook/:id')
  removeBook(@Param('id') id: string): string {
    this.bookService.removeBookFromArray(id);
    return `Book with id ${id} has been removed`;
  }

  @Put('/updateBook/')
  updateBook(@Query('id')id:string,@Body('name') name:string):any{

    this.bookService.updateBook(id,name);
    return `the book with id ${id} has been updated  with name  of ${name}`

  }
}

