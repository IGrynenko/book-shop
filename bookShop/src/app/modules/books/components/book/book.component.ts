import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CartService } from 'src/app/modules/shared/services';
import { IBook } from '../../../shared/models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private cartService: CartService
  ) { }

  ngOnInit(): void { }

  buy() {
    this.cartService.addBook(this._book, 1);
  }
}
