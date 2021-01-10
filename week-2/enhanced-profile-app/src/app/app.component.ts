/*
============================================
; Title: Exercise 2.3 - Data Binding
; Author: Dan Ross
; Date: 9 Jan 2021
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
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment:string = 'Exercise 2.3 - Data Binding';
}
