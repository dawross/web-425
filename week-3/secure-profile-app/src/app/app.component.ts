/*
============================================
; Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Dan Ross
; Date: 17 Jan 2021
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

  assignment:string = 'Exercise 3.3 - Passing Data to Routes, Part 2';
}
