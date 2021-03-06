import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

import { IBook, IBookInCart } from '../models';
import { OrderByPipePipe } from '../pipes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  set setSorting(name: string) {
    this.sortingField = name;
    this.updateBooksInCart();
  }

  get CartProduct(): IBookInCart[] { return this.books; }

  totalQuantity: number;
  totalSum: number;
 
  private books: IBookInCart[] = [];
  private sortingField = 'name';

  private booksInCart: ReplaySubject<IBookInCart[]> = new ReplaySubject<IBookInCart[]>()
  booksInCart$ = this.booksInCart.asObservable();

  constructor(
    private orderByPipePipe: OrderByPipePipe
  ) { }

  addBook(book: IBook, quantity: number): void {
    for (let addedBook of this.books) {
      if (addedBook.book.id === book.id) {
        alert("Already in the cart");
        return;
      }
    }
    this.books.push({book: book, numOfCopies: quantity});
    this.updateCartData();
  }

  removeBook(book: IBookInCart): void {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].book.id === book.book.id) {
        this.books.splice(i, 1);
        return;
      }
    }
    this.updateCartData();
  }

  changeQuantity(book: IBookInCart, quantity: number): void {
    if (quantity > 0) {
      let foundBook = this.books.find(e => e.book.id === book.book.id);
      if (foundBook) {
        foundBook.numOfCopies = quantity;
        this.updateCartData();
      }
    }
  }

  removeAllBooks(): void {
    this.books = [];
    this.updateCartData();
  }

  updateCartData(): void {
    let totalQuantity = 0;
    let totalSum = 0;
    this.books.forEach(book => {
      totalQuantity += book.numOfCopies;
      totalSum += book.numOfCopies * book.book.price;
    })
    this.updateBooksInCart();
  }

  private updateBooksInCart() {
    this.booksInCart.next(this.orderByPipePipe.transform<IBookInCart>(this.CartProduct, this.sortingField));
  }
}
