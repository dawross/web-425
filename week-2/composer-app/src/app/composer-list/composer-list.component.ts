/*
============================================
; Title: Assignment 2.4 - Routing in Action
; Author: Dan Ross
; Date: 9 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-list component
;===========================================
*/
import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// This is the ComposerListComponent class
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  //This creates an array with 5 composer objects
  constructor() {
    this.composers = [
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Frédéric Chopin", "Classical"),
      new Composer("George Frideric Handel", "Baroque")
    ]
   }

  ngOnInit(): void {
  }

}
