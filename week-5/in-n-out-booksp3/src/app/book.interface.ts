/*
============================================
; Title: Assignment 5.4 - Dialogs
; Author: Dan Ross
; Date: 30 Jan 2021
; Modified By: Dan Ross
; Description: This is the book interface file
;===========================================
*/
/* This is the book interface.
This interface contains the isbn, title, number of pages, and authors
*/
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
