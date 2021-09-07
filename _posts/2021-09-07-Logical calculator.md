---
Layout: post
Title: Logical calculator
Date: 2021-09-07
---

## Description:

Your task is to calculate the logical value of the boolean array. Test arrays are one-dimensional and their size is in the range 1-50.
Links referring to logical operations: AND, OR, and XOR.
You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

- First Example:
  Input: true, true, false, operator: AND
  Steps: true AND true -> true, true AND false -> false
  Output: false
  Second Example:
- Input: true, true, false, operator: OR
  Steps: true OR true -> true, true OR false -> true
  Output: true
- Third Example:
  Input: true, true, false, operator: XOR
  Steps: true XOR true -> false, false XOR false -> false
  Output: false
  Input:
  boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.
  Output:
  calculated boolean

## Solution

- const operations = {
- AND: (a, b) => a && b,
- OR: (a, b) => a || b,
- XOR: (a, b) => a !== b,
- }

- const logicalCalc = (array, op) => array.reduce(operations[op])

or

- function logicalCalc(array, op)
- {
- var result = array[0];
- for(var i = 1; i < array.length; i++)
- {
- if(op == "AND")
- {
- result = result && array[i];
- }
- if(op == "OR")
- {
- result = result || array[i];
- }
- if(op == "XOR")
- {
- result = result != array[i];
- }
- }
- return result;
- }
