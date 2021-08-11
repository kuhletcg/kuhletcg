---
Layout: post
Title: Test if a value is of a specific data structure type
Date: 2021-08-11
---

As a reminder, this project is being built upon the following starter project on Replit or cloned from GitHub.

#typeOf asserts that value's type is the given string, as determined by Object.prototype.toString.

Within tests/1_unit-tests.js under the test labeled #17 in the Objects suite, change each assert to either assert.typeOf or assert.notTypeOf to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

## Instructions

- All tests should pass.

- You should choose the correct method for the first assertion - typeOf vs. notTypeOf.

- You should choose the correct method for the second assertion - typeOf vs. notTypeOf.

- You should choose the correct method for the third assertion - typeOf vs. notTypeOf.

- You should choose the correct method for the fourth assertion - typeOf vs. notTypeOf.

- You should choose the correct method for the fifth assertion - typeOf vs. notTypeOf.

## Solution

This is what I was requred to do below:

- test('#typeof, #notTypeOf', function() {

  - assert.typeOf(myCar, 'object');
  - assert.typeOf(myCar.model, 'string');

- assert.notTypeOf(airlinePlane.wings, 'string');
- assert.typeOf(airlinePlane.engines, 'array');
- assert.typeOf(myCar.wheels, 'number');
- });
