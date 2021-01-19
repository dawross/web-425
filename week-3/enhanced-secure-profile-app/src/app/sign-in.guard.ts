/*
============================================
; Assignment 3.4 – Guarding Routes
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the sign-in.guard.ts file
;===========================================
*/

//These are our import statements.
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private route: Router) {
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = route.queryParams.isLoggedIn;
    //This will navigate a user back to the sign-in page if they are not logged in.
    if (isLoggedIn) {
      return true;
    } else {
      this.route.navigate(['/']);
    }
  }

}
