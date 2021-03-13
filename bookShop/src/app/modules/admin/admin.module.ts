import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent, EditProductComponent, ProductsComponent, OrdersComponent } from './components';

@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AdminRoutingModule
  ],
  providers: [
  ]
})
export class AdminModule { }
