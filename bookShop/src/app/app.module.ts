import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule, CartModule, SharedModule, LayoutModule, OrdersModule } from './modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InceptorProviders } from './modules/core/interceptors/interceptor-providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    CartModule,
    SharedModule,
    LayoutModule,
    OrdersModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [InceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
