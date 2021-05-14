---
Layout: post
Title: MakeUpperCase kata
Date: 2021-05-14
---

## MakeUpperCase

## Description:

Write function makeUpperCase.

## Solution

function makeUpperCase(str) {
return str.toUpperCase();
}

## Return Negative

##

Description:
In this simple assignment, you are given a number and have to make it negative. But maybe the number is already negative?
Example:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

## Solution

function makeNegative(num) {
return -Math.abs(num);
}
