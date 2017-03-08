import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-books',
  moduleId: module.id,
  templateUrl: './books.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  totalBooks: number;
  title = 'Syncron Library';
  count = 0;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
//    this.books = this.bookService.getBooks();

    this.bookService.getBooks().then(books => {
                this.books = books;
                this.totalBooks = this.books.length;
                const a = this.books.forEach((book: Book) => {if (book.available) { this.count += 1; }});
    });
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBook.id]);
  }

}
