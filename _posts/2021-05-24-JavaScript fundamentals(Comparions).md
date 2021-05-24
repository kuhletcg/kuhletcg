---
Layout: post
Title: JavaScript fundamentals(Comparisons)
Date: 2021-05-24
---

Today I was busy with basic JavaScript.

We know many comparison operators from maths.

In JavaScript they are written like this:

- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.

## Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers.

## For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

## Strict equality

A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true

- The same thing happens with an empty string:

alert( '' == false ); // true

## What I learned with comparison

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the “dictionary” order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined equal == each other and do not equal any other value.
- Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
