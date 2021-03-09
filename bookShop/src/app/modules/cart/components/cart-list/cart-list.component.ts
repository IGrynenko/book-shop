import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { IBookInCart } from 'src/app/modules/shared/models';
import { CartService } from './../../../shared/services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {

  // booksInCart: Observable<IBookInCart[]>;
  booksInCart: IBookInCart[];
  form = new FormGroup({
    sorting: new FormControl('')
  });

  // isShown: boolean = false;
  // test = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // this.booksInCart = this.cartService.booksInCart$;
    this.form.controls.sorting.setValue('name');
    this.form.controls.sorting.valueChanges.subscribe((value) => {
      this.cartService.setSorting = value;
    });
    this.cartService.booksInCart$.subscribe(items => {
      // console.log(items)
      // this.isShown = items && items.length > 0 ? true : false;
      this.booksInCart = items;
    })
  }

  deleteBookFromCart(book: IBookInCart) {
    this.cartService.removeBook(book);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
