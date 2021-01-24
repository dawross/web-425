/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Dan Ross
; Date: 23 Jan 2021
; Modified By: Dan Ross
; Description: This is the composer-interface
;===========================================
*/
//This is the composer interface.
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
