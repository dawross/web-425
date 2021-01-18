/*
============================================
; Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Dan Ross
; Date: 18 Jan 2021
; Modified By: Dan Ross
; Description: This is the my-details component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
//This is a new Person Class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;

  }
  //This toString method will output the Person Class content to the console.
  toString() {
    console.log(`\n Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  //This creates a new Person object
  constructor() {
    this.myProfile = new Person("Dan Ross", "Tacos", "Black");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
