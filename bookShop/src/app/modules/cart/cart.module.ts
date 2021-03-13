import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { CartComponent, CartItemComponent, CartListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
