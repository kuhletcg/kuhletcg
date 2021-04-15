---
Layout: post
Title: Return negative kata
Date: 2021-04-15
---

## Description

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

- const negative = (num) => {
- let newN = num - num;

- if (num <= 0) {
- return num;
- } else {
- return newN - num;
- }
- };

- console.log(negative(9));

# Drink about

## Description

- Kids drink toddy.
- Teens drink coke.
- Young adults drink beer.
- Adults drink whisky.
- Make a function that receives age, and return what they drink.

Rules:

- Children under 14 old.
- Teens under 18 old.
- Young under 21 old.
- Adults have 21 or more.
- Examples: (Input --> Output)

- 13 --> "drink toddy"
- 17 --> "drink coke"
- 18 --> "drink beer"
- 20 --> "drink beer"
- 30 --> "drink whisky"

## Solution

- function peopleWithAgeDrink(old) {
- if (old>=21)return "drink whisky";
- if (old<14)return"drink toddy"
- if (old<18)return"drink coke"
- if (old<21)return"drink beer"
- };
