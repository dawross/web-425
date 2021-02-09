/*
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Dan Ross
; Date: 06 Feb 2021
; Modified By: Dan Ross
; Description: This is the base layout component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    //This is the title of our app.
    this.assignment = 'Assignment 6.4 - Input Properties'
  }

  ngOnInit(): void {
  }

}
