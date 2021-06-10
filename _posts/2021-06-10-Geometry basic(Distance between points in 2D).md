---
Layout: post
Title: Geometry basic: Distance between points in 2D
Date: 2021-06-10
---

I want to share what I was busy with. Today I was busy with katas.

## Description

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

## Geometry Basics: Distance between points in 2D

- function distanceBetweenPoints(a, b) {
- return Math.hypot(a.x - b.x, a.y - b.y);
- }

## Description

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. The first argument is an array of numbers and the second is the divisor.

## Example

divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

## Find numbers that are divisible by a given number

- function divisibleBy(numbers, divisor){
- return [...numbers].filter(num=>num%divisor===0);
- }
