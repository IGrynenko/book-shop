import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent, CartComponent, CartItemComponent, BooksComponent } from './components';
import { BookTypePipe } from './pipes/book-type.pipe';


@NgModule({
  declarations: [
    BookComponent,
    CartComponent,
    CartItemComponent,
    BooksComponent,
    BookTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent,
    CartComponent
  ]
})
export class StoreModule { }
