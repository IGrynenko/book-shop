import { Component, Input, OnInit } from '@angular/core';

import { IBook } from '../../models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {

  @Input('instanceOfBook')
  set book(book: IBook) {
    this._book = book;
    for (let p in book) {
      if (book[p] === null && typeof book[p] === 'object')
        book[p] = 'unknown';
    }
  }

  _book: IBook;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void { }

  buy() {
    this.booksService.buyBook({book: this._book, numOfCopies: 1});
  }
}
