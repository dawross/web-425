/*
============================================
; Title: Exercise 4.3 - Handling Events with Observables 
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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// This is the ComposerListComponent class
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');
  //This creates an array with 5 composer objects
  constructor(private composerService: ComposerService) {
    //call composer service using dependency injection
    this.composers = this.composerService.getComposers();
    //Any time we enter text in the 'txtSearchControl' it will trigger the 'valueChanges' event and after 500ms we'll call the 'filterComposers' function.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));


   }

  ngOnInit(): void {
  }
  //This will give us an alert with the name of the current value of the 'txtSearch' field.
  filterComposers(name: string) {
    alert(name);
  }

}
