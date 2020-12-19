/*
============================================
; Title: Assignment 1.5 - Components
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: Image Components
;===========================================
*/
//import
import { Component, OnInit } from '@angular/core';
//component
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
//export
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
