import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { IBookInCart } from 'src/app/modules/shared/models';
import { CartService } from './../../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {

  booksInCart: IBookInCart[];
  form = new FormGroup({
    sorting: new FormControl('')
  });

  private destroyed$ = new Subject<boolean>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.form.controls.sorting.setValue('name');
    this.form.controls.sorting.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.cartService.setSorting = value;
    });
    this.cartService.booksInCart$.pipe(takeUntil(this.destroyed$)).subscribe(items => {
      this.booksInCart = items;
    })
  }

  deleteBookFromCart(book: IBookInCart) {
    this.cartService.removeBook(book);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.complete();
  }

}
