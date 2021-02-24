import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBookInCart } from '../../models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  books: IBookInCart[];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private booksService: BooksService
  ) {
    this.books = [];
  }
  
  ngOnInit(): void {
    this.booksService.bookToBuy$.pipe(takeUntil(this.destroy$)).subscribe(book => this.addBookToCart(book));
  }

  addBookToCart(newBook: IBookInCart) {
    for (let book of this.books) {
      if (book.book.id === newBook.book.id) {
        book.numOfCopies++;
        return;
      }
    };
    this.books.push(newBook);
  }

  deleteBookFromCart(book: IBookInCart) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].book.id === book.book.id) {
        this.books.splice(i, 1);
        return;
      }
    };
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  test() {
    console.log(this.books)
  }
}
