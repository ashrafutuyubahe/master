import { Injectable } from '@nestjs/common';

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
