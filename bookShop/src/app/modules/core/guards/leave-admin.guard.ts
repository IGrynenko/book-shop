import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { EditProductComponent } from '../../admin/components';

@Injectable({
  providedIn: 'root'
})
export class LeaveAdminGuard implements CanDeactivate<EditProductComponent> {
  canDeactivate(
    editProductComponent: EditProductComponent): boolean {
    return editProductComponent.canDeactivate ? editProductComponent.canDeactivate() : true;
  }
  
}
