/*
============================================
; Exercise 6.2 - Input/Output Properties, Part 1
; Author: Dan Ross
; Date: 06 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'wishlist' component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item-interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }
  //This will push a new item to our items array.
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
