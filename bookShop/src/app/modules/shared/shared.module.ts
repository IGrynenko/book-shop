import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';
import { BookTypePipe, OrderByPipePipe } from './pipes';
import { SelectItemDirective, SelectBlockDirective } from './directives';

@NgModule({
  declarations: [
    BookTypePipe,
    OrderByPipePipe,
    SelectItemDirective,
    SelectBlockDirective
  ],
  imports: [],
  exports: [
    CommonModule,
    OrdersModule,
    BookTypePipe,
    OrderByPipePipe,
    SelectItemDirective,
    SelectBlockDirective
  ],
  providers: [
    OrderByPipePipe
  ]
})
export class SharedModule { }
