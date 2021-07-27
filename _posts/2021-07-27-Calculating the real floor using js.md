---
Layout: post
Title: Calculatiing the real floor using js
Date: 2021-07-27
---

Today I did some javaScript katas and free code camp.

## What is the real floor?

Americans are odd people: in their buildings, the first floor is the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the American system returns the floor in the European system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In the case of the above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

The first thing I have done is to the following example below to ensure that it's working and it worked.

Examples
1 => 0
0 => 0
5 => 4
15 => 13
-3 => -3

## Solution

- function getRealFloor(n) {
- return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
- }

## Count of positive/ sum of negative

## Description

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is a sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

## Solution

- function countPositivesSumNegatives (A) {

  - if (!A || !A.length) return []

  - let pos = A.filter(x=>x>0),
  - neg = A.filter(x=>x<=0)

  - return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]

- }
