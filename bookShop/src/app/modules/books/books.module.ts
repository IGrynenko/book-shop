import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BookComponent, BooksComponent } from './components';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BookComponent,
    BooksComponent
  ]
})
export class BooksModule { }
