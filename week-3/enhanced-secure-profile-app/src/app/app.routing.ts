/*
============================================
; Assignment 3.4 – Guarding Routes
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the app.routing file
;===========================================
*/
//These are our route imports.
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

//This is the routes array that will contain all of the paths for our application.
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //This will prevent unauthorized users from accessing the HomeComponent.
    canActivate: [SignInGuard]
  }
]
