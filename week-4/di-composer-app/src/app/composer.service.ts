/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer service
;===========================================
*/
//These are our import files
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
//This identifies the class as being injectable.
@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;
  //Here are 5 composer objects.
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Frédéric Chopin", genre: "Classical"
      },
      {
        composerId: 104, fullName: "George Frideric Handel", genre: "Baroque"
      }
    ]
  }
  //This returns the composer list.
  getComposers() {
    return this.composers;
  }
  //This will loop over the composer list. If the composer ID equals the passed in ID, then return that composer.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
