/*
============================================
; Title: Assignment 1.5 - Components
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: Details Components
;===========================================
*/
//import
import { Component, OnInit } from '@angular/core';
//component
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
//export
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
