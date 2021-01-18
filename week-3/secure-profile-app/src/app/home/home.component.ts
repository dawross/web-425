/*
============================================
; Exercise 3.3 - Passing Data to Routes, Part 2
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
  isLoggedIn: Boolean;
  //Here we are using the ActivatedRoute and looking for the queryParam  'isLoggedIn' from our signin function in our signin.component
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
