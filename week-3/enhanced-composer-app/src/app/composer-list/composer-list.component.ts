/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Dan Ross
; Date: 17 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-list component
;===========================================
*/
//These are the import statements.
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// This is the ComposerListComponent class
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  //This creates an array with 5 composer objects
  constructor() {
    //This will create a new instance of the composer class.
    this.composers = new Composer().getComposers();

   }

  ngOnInit(): void {
  }

}
