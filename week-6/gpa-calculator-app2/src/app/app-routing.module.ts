/*
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Dan Ross
; Date: 06 Feb 2021
; Modified By: Dan Ross
; Description: This is the app-routing module
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

//These are routes which will load the corresponding component based on the URL path.
const routes: Routes = [

  {
    path: '',
    component: BaseLayoutComponent,
    //These are child routes for the BaseLayoutComponent
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    //These are child routes for the AuthLayoutComponent.
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    //If an invalid URL is entered, this will redirect them to the not-found component.
    path: '**',
    redirectTo: 'session/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
