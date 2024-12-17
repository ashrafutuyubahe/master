import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class BookManipulateService {
  public booksArray = [
    {
      id: '1',
      name: '7 atomic habits ',
    },
    {
      id: '2',
      name: 'clean code',
    },
    {
      id: '3',
      name: 'do not repeat yourself',
    },
  ];

  findAllBooks(): any[] {
    return this.booksArray;
  }
  
  findSingleBook(id: string): string {
    const theBook = this.booksArray.find((book) => book.id === id);
  
    if (!theBook) {
      throw new HttpException(`The book with id ${id} is not found`, HttpStatus.NOT_FOUND);
    }
    return `The book you asked for is ${theBook.name}`;
  }
  

  addBooks(id: string, name: string): void {
    const newBook = { id, name };
    this.booksArray.push(newBook);
  }

  removeBookFromArray(id: string): void {
      this.booksArray = this.booksArray.filter((book) => book.id !== id);
  }

  updateBook(id: String, name: string): void {
    const bookIndex = this.booksArray.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.booksArray[bookIndex].name = name;
    }
  }
}
