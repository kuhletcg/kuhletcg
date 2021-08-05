---
Layout: post
Title: Squash the bugs using js
Date: 2021-08-05
---

## Squash the bugs.js

## Description:

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. The output should be the length of the longest word, as a number.
There will only be one 'longest' word.

## Solution

- function findLongest(str) {
- return Math.max(...str.split(' ').map(word=>word.length))
- }

## Enumerable Magic #1 - True for All?

Create a method that takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

## Solution

- function all( arr, fun ){
- return arr.every(fun)
- }

## The Feast of Many Beasts

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

## Solution

- function feast(beast, dish) {
- return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish. length - 1]
- }
