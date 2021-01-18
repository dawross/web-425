/*
============================================
; Exercise 3.3 - Passing Data to Routes, Part 2
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

//This is the routes array that will contain all of the paths for our application.
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
