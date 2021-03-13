import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductComponent, EditProductComponent, ProductsComponent, OrdersComponent } from './components';
import { LeaveAdminGuard } from '../core/guards/leave-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/edit/:productID', component: EditProductComponent, canDeactivate: [LeaveAdminGuard] },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
