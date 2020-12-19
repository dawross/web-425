/*
============================================
; Title: Exercise 1.3 - Angular CLI
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: Angular Hello World
;===========================================
*/
//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NgModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//exports
export class AppModule { }
