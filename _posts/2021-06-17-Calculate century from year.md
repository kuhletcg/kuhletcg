---
Layout: post
Title: Calculate century from year
Date: 2021-06-17
---

## Example: 1

## Description

The first-century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input, Output Examples :
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Hope you enjoy it .. Awaiting for Best Practice Codes

## Solution

const century = year =>
Math.ceil(year/100)

## Example: 2

Problem
We are required to write a JavaScript function that takes in a number that represents a year and find the century that year falls in.

For instance,

1864 falls in the 19th century.

2021 falls in the 21st century.

- Example
  Following is the code −

const year = 1956;
const findCentury = (year) => {
let century = 0;
for(let i = 0; i < year; i++){
if(i % 100 === 0){
century++;
};
};
return century;
};
console.log(findCentury(year));

- Output
  Following is the console output −

20
