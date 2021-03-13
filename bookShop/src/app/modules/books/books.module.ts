import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookComponent, BooksComponent, BookInfoComponent } from './components';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    BookInfoComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    BookComponent,
    BooksComponent,
    BookInfoComponent
  ]
})
export class BooksModule { }
