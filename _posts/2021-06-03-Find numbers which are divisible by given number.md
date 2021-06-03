---
Layout: post
Title: Find numbers which are divisible by given number
Date: 2021-06-03
---

## Despription

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. The first argument is an array of numbers and the second is the divisor.

## Example

divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

## Solution

- function divisibleBy(numbers, divisor){
- return [...numbers].filter(num=>num%divisor===0);
- }

## Price of Mangoes

## Description

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

## Examples

mango(3, 3) ==> 6 # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30 # 6 mangoes for 5 = 30; +3 mangoes for free

## Solution

- function mango(quantity, price){
- let q=Math.floor(quantity/3)
- return (quantity-q)\*price
- }
