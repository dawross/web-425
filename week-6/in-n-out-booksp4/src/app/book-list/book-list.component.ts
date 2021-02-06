/*
============================================
; Exercise 6.2 - Input/Output Properties, Part 1
; Author: Dan Ross
; Date: 06 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'book-list' component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService} from '../books.service';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
// This is the BookListComponent class
export class BookListComponent implements OnInit {
  //Field properties
  books: Observable<IBook[]>;
  //Here is where we're building the headers for our table.
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //This variable is so that when a user selects a book, it's mapped to a book object.
  book: IBook;
  //Here we use dependency injection to access Book Service.
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    //Call the getBooks function and map it to this.books (array of IBooks)
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  //This will return the books that we're looking for an log it in the console
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
   //This will open a material dialog box with the details of the chosen book.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }


}
