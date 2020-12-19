/*
============================================
; Title: Assignment 1.4 - TypeScript
; Author: Dan Ross
; Date: 19 Dec 2020
; Modified By: Dan Ross
; Description: person class
;===========================================
*/
//import IPerson
import { IPerson } from "./person.interface";
//Person class
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//
let myName = new Person("Dan", "Ross");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);