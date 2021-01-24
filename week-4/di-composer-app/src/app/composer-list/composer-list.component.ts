/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-list component
;===========================================
*/
//These are the import statements.
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// This is the ComposerListComponent class
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  //This creates an array with 5 composer objects
  constructor(private composerService: ComposerService) {
    //call composer service using dependency injection
    this.composers = this.composerService.getComposers();


   }

  ngOnInit(): void {
  }

}
