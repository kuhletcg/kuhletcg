---
Layout: post
Title: Convert a number to a string
Date: 2021-04-28
---

## Introduction

Today I was busy checking javascript, I have completed some katas.

## Body

## Convert a Number to a String!

We need a function that can transform a number into a string.

What ways of achieving this do you know?

## Examples:

- 123 --> "123"
- 999 --> "999"

## Solution

- function numberToString(num) {
- return num.toString();
- }

## Difference of Volumes of Cuboids

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

## Solution

- function find_difference([a,b,c], [d,e,f]) {
  - return Math.abs(a*b*c-d*e*f)
- }

## MakeUpperCase

Write a function that converts the input string to uppercase.

## Solution

- function makeUpperCase(str) {
- return str.toUpperCase();
- }
