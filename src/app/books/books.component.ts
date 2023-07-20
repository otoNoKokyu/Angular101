import { Component } from '@angular/core';
import {BookServiceService} from '../book-service.service'
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  newBookTitle: string = '';
  newBookAuthor: string = '';
  newBookPublicationYear: number = 0;
  books: Book[]= this.bookService.getBooks()

  constructor(private bookService: BookServiceService){

  }

  addBook(): void {
    // const newBook = Book({this.newBookTitle, this.newBookAuthor, this.newBookPublicationYear});
    this.bookService.addBook({ title: this.newBookTitle, author: this.newBookAuthor, publicationYear: this.newBookPublicationYear });
  }
  deleteBook(name: string): void {
    // console.log(name)
    this.bookService.deleteBook(name);
  }
  ngOnInit(){
    this.books = this.bookService.getBooks()
  }

}
