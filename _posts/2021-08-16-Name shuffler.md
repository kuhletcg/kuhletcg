---
Layout: post
Title: Name shuffler
Date: 2021-08-16
---

## Name Shuffler

## Description

Write a function that returns a string in which the first name is swapped with the last name.

nameShuffler('john McClane'); => "McClane john"

## Solution

- function nameShuffler(str){
- return str.split(" ").reverse().join(" ");
- }

## Is it a palindrome?

## Description

Write a function that checks if a given string (case insensitive) is a palindrome.

## Solution

- function isPalindrome(x) {
  - x=x.toLowerCase()
- return x===x.split`.reverse().join`
- }

## Hex to Decimal

## Description

Complete the function which converts a hex number (given as a string) to a decimal number.

## Solution

- function hexToDec(hexString){
- return parseInt(hexString, 16);
- }
