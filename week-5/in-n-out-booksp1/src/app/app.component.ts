/*
============================================
; Title: Exercise 5.2 - Navigation and Layout
; Author: Dan Ross
; Date: 30 Jan 2021
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
  assignment: string;
  constructor() {
    this.assignment = 'Exercise 5.3 - Navigation and Layout'
  }

}
