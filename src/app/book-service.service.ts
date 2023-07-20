import { Injectable } from '@angular/core';
import { Book } from './books/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private books: Book[] = [
    { title: 'Book 1', author: 'Author 1', publicationYear: 2000 },
    { title: 'Book 2', author: 'Author 2', publicationYear: 2000 },
    { title: 'Book 3', author: 'Author 3', publicationYear: 2000 },
  ];

  getBooks(): Book[] {
    return this.books
  }
  addBook(book: Book) {
    this.books.push(book)

  }
  deleteBook(title: any) {

    // const index = this.books.indexOf(title)
    //  this.books.splice(index,1)
    this.books.pop()
    // console.log(this.books);
  }

}
