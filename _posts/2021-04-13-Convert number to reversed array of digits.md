---
Layout: post
Title: Convert number to reverse array of digits
Date: 2021-04-13
---

# Introduction

Today I was busy with code wars and free code camp. I also checked CRUD, before I didn't know what does CRUD means but now I do understand what does CRUD standfor.

# Description

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Solution

## Convert number to reverse array of digits

- function digitize(n){
- return (n + '').split('').map(Number).reverse();
  }

# Description

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true, true, true, false,
true, true, true, true,
true, false, true, false,
true, false, false, true,
true, true, true, true,
false, false, true, true]

The correct answer would be 17.

# Solution

## Counting sheep...

- function countSheeps(arrayOfSheeps) {
  - return arrayOfSheeps.filter(Boolean).length;
    }

## What is CRUD?

CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete. Persistent storage refers to any data storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive.

## Explaining CRUD Operations

Organizations that keep track of customer data, accounts, payment information, health data, and other records require data storage hardware and applications that provide persistent storage.

# Four CRUD Components Explained

A relational database consists of tables with rows and columns. In a relational database, each row of a table is known as a tuple or a record. Each column of the table represents a specific attribute or field.

## Create

The create function allows users to create a new record in the database. A user can create a new row and populate it with data that corresponds to each attribute, but only an administrator might be able to add new attributes to the table itself.

## Read

The read function is similar to a search function. It allows users to search and retrieve specific records in the table and read their values. Users may be able to find desired records using keywords, or by filtering the data based on customized criteria.

## Update

The update function is used to modify existing records that exist in the database. To fully change a record, users may have to modify information in multiple fields.

## Delete

The delete function allows users to remove records from a database that is no longer needed. Both SQL and Oracle HCM Cloud have a delete function that allows users to delete one or more records from the database.
