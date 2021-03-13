import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from 'src/app/modules/books/services';
import { ProductBase } from '../product-base/product-base';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent extends ProductBase implements OnInit {

  private dataSaved: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private location: Location
  ) {
    super();
   }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    const id = this.route.snapshot.paramMap.get('productID');
    
    if (id) {
      const book = this.booksService.getBookById(+id);
      if (book) {
        this.productForm.controls.id.setValue(book.id);
        this.productForm.controls.name.setValue(book.name);
        this.productForm.controls.category.setValue(book.category.toString());
        this.productForm.controls.createDate.setValue(book.createDate);
        this.productForm.controls.description.setValue(book.description);
        this.productForm.controls.isAvailable.setValue(book.isAvailable ? '1' : '');
        this.productForm.controls.price.setValue(book.price);
      }
    }
  }

  onSubmit() {
    const bookFromForm = this.createBook();
    this.booksService.updateBook(bookFromForm);
    this.dataSaved = true;
    this.back();
  }

  back() {
    this.location.back();
  }

  canDeactivate(): boolean {
    if (!this.dataSaved && this.productForm.dirty) {
      const userConfirm = confirm("You have changed and unsaved data. Are you sure you want to leave?");
      return userConfirm;
    }

    return true;
  }
}
