---
Layout: post
Title: My day
Date: 2021-08-30
---

## Description:

Return a new array consisting of elements that are multiple of their own index in the input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] => [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

## Solutions

- function multipleOfIndex(array) {
- return array.filter((num, i) => num % i === 0);
- }

or

const multipleOfIndex = arr => arr.filter((x, i) => x % i === 0);

## Description:

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, update_light('green') should return 'yellow'.

## Solution

- function updateLight(current) {
- return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

- }

or

- const updateLight = current => ({
- green: 'yellow',
- yellow: 'red',
- red: 'green',
- })[current]
