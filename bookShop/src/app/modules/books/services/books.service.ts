import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookType, IBook } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: IBook[] = [
    { id: 1, name: 'Aaaa', category: BookType.Action, createDate: '2000-12-01', description: 'some description', isAvailable: true, price: 100 },
    { id: 2, name: 'Bbbb', category: BookType.Classics, createDate: '2010-01-21', description: 'some description', isAvailable: true, price: 200 },
    { id: 3, name: 'Cccc', category: BookType.Detective, createDate: '2001-07-13', description: 'some description', isAvailable: true, price: 50 },
    { id: 4, name: 'Dddd', category: BookType.Action, createDate: '1995-11-22', description: 'some description', isAvailable: false, price: 20 },
    { id: 5, name: 'Eeee', category: BookType.Fantasy, createDate: '1987-06-06', description: 'some description', isAvailable: true, price: 80 },
    { id: 6, name: 'Ffff', category: BookType.Historical, createDate: '2015-06-06', description: 'some description', isAvailable: true, price: 150 },
    { id: 7, name: 'Gggg', category: BookType.Horror, createDate: '2020-06-06', description: 'some description', isAvailable: false, price: 14 }
  ];

  constructor() { }

  public getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  public getBookById(id: number): IBook {
    return this.books.find(b => b.id === id);
  }

  public removeBook(id: number) {
    const index = this.books.findIndex(b => b.id === id);
    this.books.splice(index, 1);
  }

  public updateBook(book: IBook) {
    const index = this.books.findIndex(b => b.id === book.id);
    this.books[index] = book;
  }

  public addBook(book: IBook): boolean {
    if (this.books.map(b => b.id).includes(book.id)) {
      return false;
    }
    this.books.push(book);
    return true;
  }
}
