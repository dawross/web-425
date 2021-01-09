/*
============================================
; Title: Exercise 2.2 - Navigation
; Author: Dan Ross
; Date: 9 Jan 2021
; Modified By: Dan Ross
; Description: This is the routing module where we can set up our routes
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//These import statements load the components defined in our routes
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

//These are routes which will load the corresponding component based on the URL path.
const routes: Routes = [
  {
    //This is for the URL http://localhost:4200
    path: '',
    component : HomeComponent
  },
  {
    //This is for the URL http://localhost:4200/home
    path: 'home',
    component: HomeComponent
  },
  {
    //This is for the URL http://localhost:4200/contact
    path: 'contact',
    component: ContactComponent
  },
  {
    //This is for the URL http://localhost:4200/about
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
