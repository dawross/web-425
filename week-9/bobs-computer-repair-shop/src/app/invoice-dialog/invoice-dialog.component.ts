/*
============================================
; Title: invoice-dialog.component.ts
; Author: Dan Ross
; Date: 27 Feb 2021
; Modified By: Dan Ross
; Description: ; Description: This is the invoice dialog component.
;===========================================
*/
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IService } from '../services.interface';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {

  service: Array<IService> = [];
  invoice: number;
  invoiceDate: Date;
  //This will create a material dialog box with the details of the invoice.
  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.service = data.service;
    this.invoice = data.invoice;
    this.invoiceDate = data.invoiceDate;
  }

  ngOnInit(): void {
  }
}
