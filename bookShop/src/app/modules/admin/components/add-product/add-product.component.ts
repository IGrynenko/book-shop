import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BooksService } from 'src/app/modules/books/services';
import { ProductBase } from '../product-base/product-base';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends ProductBase implements OnInit {

  constructor(
    private bookService: BooksService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    super();
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const book = this.createBook();
    const result = this.bookService.addBook(book);

    if (result) {
      this.location.back();
    }
    else {
      this.snackBar.open("Wrong Id", null, { duration: 1000 });
    }
  }
}
