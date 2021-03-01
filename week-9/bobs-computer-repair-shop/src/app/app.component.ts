/*
============================================
; Title: app.component.ts
; Author: Dan Ross
; Date: 27 Feb 2021
; Modified By: Dan Ross
; Description: This is the root app component.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bobs-computer-repair-shop';
}
