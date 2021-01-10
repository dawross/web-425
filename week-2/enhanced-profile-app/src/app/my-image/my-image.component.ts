/*
============================================
; Title: Exercise 2.3 - Data Binding
; Author: Dan Ross
; Date: 9 Jan 2021
; Modified By: Dan Ross
; Description: This is the image component
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
