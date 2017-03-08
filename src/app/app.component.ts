import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  title = 'Syncron Library';
}
