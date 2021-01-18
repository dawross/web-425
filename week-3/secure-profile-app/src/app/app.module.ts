/*
============================================
; Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the root app module
;===========================================
*/
//These are our import statements.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    //This will we will pass in the AppRoutes array from app.routing.ts
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
