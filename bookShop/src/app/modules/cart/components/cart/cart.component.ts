import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IBookInCart } from 'src/app/modules/shared/models';
import { CartService } from 'src/app/modules/shared/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {

  get emptyList(): boolean {
    let result = this._books && this._books.length > 0 ? true : false;
    return result;
  }

  _books: IBookInCart[];

  private _sub: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this._sub.add(this.cartService.booksInCart$.subscribe(books => this._books = books))
  }

  confirm() {
    this.router.navigate(['/order']);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
