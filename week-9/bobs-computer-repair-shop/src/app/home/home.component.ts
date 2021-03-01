/*
============================================
; Title: home.component.ts
; Author: Dan Ross
; Date: 27 Feb 2021
; Modified By: Dan Ross
; Description: This is the home component.
;===========================================
*/
import { Component, OnInit, NgModule } from '@angular/core';
import { IService } from '../services.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// This is the HomeComponent class
export class HomeComponent implements OnInit {
  servicesForm: FormGroup;
  parts: 0;
  labor: 0;
  services: Array<IService> = [];
  service: IService;
  services_list = [];
  // Only Numbers with Decimals
  keyPressNumbersDecimal(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  //This holds JSON of our services.
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.services_list = [
      {
        name: "Password Reset",
        invoiceItem: "Password Reset",
        price: 39.99,
        checked: false
      }, {
        name: "Spyware Removal",
        invoiceItem: "Spyware Removal",
        price: 99.99,
        checked: false
      }, {
        name: "RAM Upgrade",
        invoiceItem: "RAM Upgrade",
        price: 129.99,
        checked: false
      }, {
        name: "Software Installation",
        invoiceItem: "Software Installation",
        price: 49.99,
        checked: false
      }, {
        name: "Tune-up",
        invoiceItem: "Tune-up",
        price: 89.99,
        checked: false
      }, {
        name: "Keyboard Cleaning",
        invoiceItem: "Keyboard Cleaning",
        price: 45.00,
        checked: false
      }, {
        name: "Disk Clean-up",
        invoiceItem: "Disk Clean-up",
        price: 149.99,
        checked: false
      }
    ]
  }
  //Change checkbox state to true or false
  list_change(e) {
    if (e.checked) {
      e.checked = false;
    }
    else if (!e.checked) {
      e.checked = true;
    }
  }

  ngOnInit(): void {
    this.servicesForm = this.fb.group({
      parts: [''],
      labor: ['']
    })
  }
  //This returns the services form controls
  get form() { return this.servicesForm.controls; }

  //Calculate our results based on selections.
  calculateResults() {
    let invoiceTotal: number = 0;
    let invoiceDate: Date = new Date();

    //If a service is checked, add it to our invoice.
    for (let value of Object.values(this.services_list)) {
      if (value.checked) {
        invoiceTotal += value.price;
        this.services.push({
          name: value.invoiceItem,
          price: value.price
        });
      }
    }
    //If a value exists in the parts input, add it to our invoice.
    if (this.form.parts.value) {
      invoiceTotal += this.form.parts.value;
      this.services.push({
        name: 'Parts',
        price: this.form.parts.value
      });
    }
    //If a value exists in the labor input, add it to our invoice.
    if (this.form.labor.value) {
      invoiceTotal += this.form.labor.value * 50;
      this.services.push({
        name: 'Labor',
        price: this.form.labor.value * 50
      });
    }
    //This will open a material dialog box with the details of the invoice.
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        service: this.services,
        invoice: invoiceTotal,
        invoiceDate: invoiceDate
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.services = [];
      }
    });
  }

}
