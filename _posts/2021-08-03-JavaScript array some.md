---
Layout: post
Title: JavaScript array some
Date: 2021-08-03
---

## Introduction

Today I was looking at the javascript array some. Sometimes, you want to check if an array has a least one element that meets a specified condition.

## Body

Example to check if the following array has at least one element less than 5.

- let marks = [ 4, 5, 7, 9, 10, 3 ];

- let lessThanFive = false;

- for (let index = 0; index < marks.length; index++) {
- if (marks[index] < 5) {
-     lessThanFive = true;
-      break;
- }
- }

- console.log(lessThanFive);

The output it gonna be True

The array type provides you with an instance method called some() that allows you to test if an array has at least one element that meets a condition.

- let marks = [ 4, 5, 7, 9, 10, 3 ];

- lessThanFive = marks.some(function(e) {
- return e < 5;
- });

- console.log(lessThanFive);

// output it's true

## Conclusion

I have learned, how to use the JavaScript array some method to check if at least one element in the array passes a test.
