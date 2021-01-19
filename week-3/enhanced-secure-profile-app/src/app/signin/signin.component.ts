/*
============================================
; Assignment 3.4 – Guarding Routes
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the signin component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //This function will authenticate a user when they click on the submit button on our sign-in form.
  signin() {
    this.isLoggedIn = true;
    //This will route a user to the home page upon successful sign-in.
    this.router.navigate(['./home'], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true })
  }

}
