/*
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Dan Ross
; Date: 06 Feb 2021
; Modified By: Dan Ross
; Description: This is the grade summary component.
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
  //These declare the input properties to receive the grade and courses from the user.
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
