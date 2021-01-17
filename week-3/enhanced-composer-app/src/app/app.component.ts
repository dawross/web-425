/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Dan Ross
; Date: 16 Jan 2021
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
//This is the title fo our App.
export class AppComponent {
  title = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
