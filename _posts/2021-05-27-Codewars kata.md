---
Layout: post
Title: Codewars kata
Date: 2021-05-28
---

## Description:

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples
mango(3, 3) ==> 6 # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30 # 6 mangoes for 5 = 30; +3 mangoes for free

## Solutions

- function mango(quantity, price){
- let q=Math.floor(quantity/3)
- return (quantity-q)\*price
- }

or

2. - function mango(quantity, price){

- let totalPrice = 0;
  - for(let i = 0; i<=quantity; i++){
  - if (i% 3!==0) {
  - totalPrice += price
  - }
  - }
  - return totalPrice
- }
