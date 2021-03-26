---
Layout: post
Title: Sort and start
Date: 2021-03-26
---

# Description

## Is the date today

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.

## Solution

- function isToday(date) {
- return new Date().toDateString() === date.toDateString()
- }

# Description

## Sort and start

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string and have "\*\*\*" between each of its letters.

You should not remove or add elements from/to the array.

# Solution

- function twoSort(s) {
- return s.sort()[0].split('').join('\*\*\*');
- }

# Description

## Is this my tail?

Some new animals have arrived at the zoo. The zookeeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function
to make sure that the second argument (tail), is the same as the last letter of the
the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be strings and normal letters.

For Haskell, the body has the type of String and the tail has the type of Char. For Go, the body has
type string and tail has type rune.

# Solution

- function correctTail(bod, tail) {
- return bod[bod.length-1] === tail
- }
