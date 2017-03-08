/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {
//  getBooks(): Book[] {
//    return BOOKS;
//  }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

//  getBooks(): Promise<Book[]> {
//    return new Promise(resolve => {
//      setTimeout(() => resolve(BOOKS), 2000);
//    });
//  }

  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id));
  }
}
