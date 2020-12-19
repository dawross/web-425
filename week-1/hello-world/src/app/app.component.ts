/*
============================================
; Title: Exercise 1.3 - Angular CLI
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: Angular Hello World
;===========================================
*/

//import component
import { Component } from '@angular/core';
//components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//exports
export class AppComponent {
  myWorld = "You're now in Dan Ross' world!"
}
