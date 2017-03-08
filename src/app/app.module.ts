import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail.component';
import { HeaderDetailComponent } from './header-detail.component';
import { BooksComponent } from './books.component'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    HeaderDetailComponent,
    BooksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: BookDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
