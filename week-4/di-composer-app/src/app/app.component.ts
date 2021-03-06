/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the root app component.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//This is the title for our App.
export class AppComponent {
  title = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
