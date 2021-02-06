/*
============================================
; Exercise 6.2 - Input/Output Properties, Part 1
; Author: Dan Ross
; Date: 06 Feb 2021
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1'
  }

}
