/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  private dummyBooks = [];
  constructor (private http: Http) { }
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

  getBookFromService(id: number): void {
     this.http.get('http://swapi.co/api/people/1')
    .toPromise()
    .then();
  }


  getDummyBooks(): Observable<Book[]> {
//    let headers = new Headers({ 'Content-Type': 'application/json' });
//    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/dummyBooks')
              .map(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
