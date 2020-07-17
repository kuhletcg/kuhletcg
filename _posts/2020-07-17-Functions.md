---
Layout: post
Title: "Functions"
Date: 2020-07-17
---
# Functions

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

## The function has full access to the outer variable. It can modify it as well.
For instance:

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

### The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3