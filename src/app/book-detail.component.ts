/**
 * New typescript file
 */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from './book';
import { BookService } from './book.service'

@Component({
  moduleId: module.id,
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
})

export class BookDetailComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

   goBack(): void {
     this.location.back();
   }

  @Input()
  book: Book;

  @Output()
  changedBook: EventEmitter<Book>;


}
