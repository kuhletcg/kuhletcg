---
Layout: post
Title: Transportation on cacation kada
Date: 2021-02-26
---

# Introduction

Today I focus on codeword wars too much because I noticed that I'm left behind
and I was busy with my project, I was doing reducer redux.

A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state. For example, an authentication reducer can take an initial state of an application in form of an empty object and an action that tells it that a user has logged in and returned a new application state with a logged-in user.

# Body

1. Description:
   After a hard quarter in the office, you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
   You will need a rental car for you to get around on your vacation. The manager of the car rental makes you some good offers.
   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
   Write a code that gives out the total amount for different days(d).
   \*/

## Solution

function baseCost(days, rate) {
return days \* rate;
}

function discountRate(days) {
if ( days >= 7 ) {
return 50;
}
else if ( days >= 3 ) {
return 20;
}
else {
return 0;
}
}

function rentalCarCost(days) {
return baseCost(days, 40) - discountRate(days);
}

2. Description:
   Write function make uppercase.
   \*/

## Solution

function makeUpperCase(str) {
return str.toUpperCase();
}

3.  Description:
    write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
    the string should start with a 1.
    a string with size 6 should return:'101010'.
    with size 4 should return : '1010'.
    with size 12 should return : '101010101010'.
    The size will always be positive and will only use whole numbers.
    \*/

## Solution

function stringy(size) {
var str='';
for( var i=1; i<=size; i++ )
str+=i%2;
return str;
}

# Conclusion

Reducers are an important part of Redux state management, with reducers we can write pure functions to update specific areas of our Redux applications without side effects. We’ve learned the basics of Redux reducers, their uses, and the core concept of reducers, state, and arguments.

You can take this further by seeing the documentation on Redux reducers here. You can take this further and build more on Redux reducers, let me know what you build.
