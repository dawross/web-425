/*
============================================
; Title: Assignment 1.5 - Components
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: Components
;===========================================
*/
//imports
import { Component } from '@angular/core';
//components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export
export class AppComponent {
  title = 'profile-app';
  assignment:string = 'Assignment 1.5 - Components';
}
