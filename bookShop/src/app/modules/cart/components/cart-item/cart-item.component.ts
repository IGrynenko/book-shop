import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IBookInCart } from 'src/app/modules/shared/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input()
  bookInCart: IBookInCart;

  @Output()
  deleteBook = new EventEmitter<IBookInCart>();

  numOfCopies: number;

  constructor() { }

  ngOnInit(): void {
    this.numOfCopies = this.bookInCart.numOfCopies;
    // console.log(this.bookInCart)
  }

  delete(): void {
    this.deleteBook.emit(this.bookInCart);
  }

  changeNum(event): void {
    this.numOfCopies = this.bookInCart.numOfCopies = +event.target.value;
  }

}
