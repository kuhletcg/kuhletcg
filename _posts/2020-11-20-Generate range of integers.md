---
Layout: 
Title: "Generate range of integers"
Date: "2020-11-20"
---


# Generate a range of integers
## Description:

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
Task
Implement a function named
generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
, which takes three arguments and generates a range of integers from min to max, with a given step. The first is the minimum value, the second is the maximum range and the third is the step.
Note
min < max
step > 0
*/


## Solution

function generateRange(min, max, step){
  let result=[]
    for (let i=min;i<=max;i+=step) result.push(i)
   return result
}

# Summation
## Description

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

## Solution
const summation = n => n * (n + 1) / 2;