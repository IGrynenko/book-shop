import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PageNotFoundComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule { }
