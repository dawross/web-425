/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the about component
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
