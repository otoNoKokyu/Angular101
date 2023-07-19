import { Injectable } from '@angular/core';
import { Book } from './books/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private books: Book[] = [
    new Book('Book 1', 'Author 1', 2000),
    new Book('Book 2', 'Author 2', 2010),
    new Book('Book 3', 'Author 3', 2020),
  ];

  getBooks(): Book[] {
    return this.books
  }
  addBook(book: Book){
    this.books.push(book)
  }
  // deleteBook(title: string) {
  //   this.books = this.books.filter(book => book.title !== title);
  //   console.log(this.books);
  // }

}
