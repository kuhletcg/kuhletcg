---
Layout: 
Title: Parse float
Date: 2020-09-04 
 ---

This week I was busy with code wars.

 1. Parse float
 ## Description:
Write function parseFloat (for Javascript parseF) which takes a string and returns a number or
 Nothing (for Python None, for Javascript null) if conversion is not possible.
*/


## Solution
function parseF(s) {
  return (Number.isNaN(parseFloat(s)) ? null : parseFloat(s));
}

2. Can we divide it.

## Description:
Your task is to create functions DivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
A few cases:
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false
(45, 1, 6)    ->  false
(45, 5, 15)   ->  true
(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
*/

## Solution
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

In conclusion On friday I way busy with class test.