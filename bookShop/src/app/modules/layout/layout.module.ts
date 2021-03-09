import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class LayoutModule { }
