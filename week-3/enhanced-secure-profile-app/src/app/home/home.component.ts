/*
============================================
; Assignment 3.4 – Guarding Routes
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the home component.
;===========================================
*/
//These are our imports.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
