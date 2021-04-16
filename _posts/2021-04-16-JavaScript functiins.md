---
Layout: post
Title: JavaScript functions
Date: 2021-04-16
---

## My day

My day was been greet, I was busy with Moral's project and I was also busy with javaScript function.

## What is a for loop JavaScript?

The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false. JavaScript supports different kinds of loops: ... for/in - loops through the properties of an object.

## Examples

## Write function that return an array of positive numbers

- function getPositiveNumber(numbers) {
- let positiveNumbers = [];
- for (let i = 0; i < numbers.length; i++) {
- if (numbers[i] > 0) {
- positiveNumbers.push(numbers[i]);
  - }
  - }
  - return positiveNumbers;
- }
- console.log(getPositiveNumber([6, -1, 4, -8, 10]));

## Print out numbers from 0-20

- for (var i = 0; i <= 20; i++) {
- console.log(i);
- }
