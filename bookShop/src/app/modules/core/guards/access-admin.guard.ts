import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LocalStorageService } from '../services';

const userWithRights = { password: 'pass123'} ;

@Injectable({
  providedIn: 'root'
})
export class AccessAdminGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const authorized = this.localStorageService.getItem('authorized');

      if (!authorized) {
        const pass = prompt("Password");
      
        if (pass && pass === userWithRights.password) {
          this.localStorageService.setItem('authorized', true)
          return true;
        }
        else {
          return false;
        }
      }
      return true;
  }
  
}