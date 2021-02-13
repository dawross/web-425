/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Dan Ross
; Date: 13 Feb 2021
; Modified By: Dan Ross
; Description: This is the home component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  //This is our array for grades.
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }
  //This will push a new transcript entry to our transcriptEntry array.
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }
  //This will calculate the results of our entries.
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      //This checks the transcriptEntry.grade and assigns the appropriate value.
      switch (entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }
  //This will clear our transcript entries when its called.
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
