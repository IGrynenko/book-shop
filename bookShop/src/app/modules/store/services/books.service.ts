import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { IBook, BookType, IBookInCart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: IBook[] = [
    { id: 1, name: 'Aaaa', category: BookType.Action, createDate: 2000, description: 'some description', isAvailable: true, price: 100 },
    { id: 2, name: 'Bbbb', category: BookType.Classics, createDate: 2010, description: 'some description', isAvailable: true, price: 200 },
    { id: 3, name: 'Cccc', category: BookType.Detective, createDate: 2001, description: 'some description', isAvailable: true, price: 50 },
    { id: 4, name: 'Dddd', category: BookType.Action, createDate: 1995, description: 'some description', isAvailable: false, price: 20 },
    { id: 5, name: 'Eeee', category: BookType.Fantasy, createDate: 1987, description: 'some description', isAvailable: true, price: 80 },
    { id: 6, name: 'Ffff', category: BookType.Historical, createDate: 2015, description: 'some description', isAvailable: true, price: 150 },
    { id: 7, name: 'Gggg', category: BookType.Horror, createDate: 2020, description: 'some description', isAvailable: false, price: 14 }
  ];

  private bookToBuy: Subject<IBookInCart> = new Subject<IBookInCart>();
  bookToBuy$ = this.bookToBuy.asObservable();

  constructor() { }

  public getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  public buyBook(book: IBookInCart) {
    this.bookToBuy.next(book);
  }
}
