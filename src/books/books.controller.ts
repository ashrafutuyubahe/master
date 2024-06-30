import { Controller, Get } from '@nestjs/common';

Controller('getAllBooks');
export class BooksController {
  @Get()
  getAllBooks():object {
   let booksArray = [
        {
          id: '1',
          name: '7 atomic habits ',
        },
        {
          id: '2',
          name: ' clean code',
        },
        {
          id: '3',
          name: ' do not repeat yourself',
        },
      ];

 return booksArray

  }
}
