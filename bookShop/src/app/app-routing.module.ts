import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent, BookInfoComponent } from './modules/books/components';
import { CartComponent } from './modules/cart/components';
import { OrdersComponent } from './modules/orders/components';
import { AboutComponent, PageNotFoundComponent } from './modules/layout/components';
import { AccessAdminGuard } from './modules/core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: 'products-list', component: BooksComponent },
  { path: 'product/:productID', component: BookInfoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AccessAdminGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
