import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { BooksService } from 'src/app/modules/books/services';
import { ProductBase } from '../product-base/product-base';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends ProductBase implements OnInit, OnDestroy {

  private _sub: Subscription;

  constructor(
    private booksService: BooksService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    super();
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const book = this.createBook();
    this._sub = this.booksService.getBooks().subscribe(books => {
      if (books) {
        const ids = books.map(b => b.id);

        if (ids.includes(book.id)) {
          this.snackBar.open("Wrong Id", null, { duration: 1000 });
        }
        else {
          this.booksService.addBook(book).then(b => {
            if (b) this.location.back();
          })
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
