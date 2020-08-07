---
Layout: post
Tittle: switch in js
Date: 2020-08-07
---
# Introduction
This week I was busy with freecodecamp(ES6).
I want to share how do we used switch in javascript.

# Body
## Switch
The switch statement executes a block of code depending on different cases.

The switch statement is a part of JavaScript's "Conditional" Statements, 
which are used to perform different actions based on different conditions.
Use a switch to select one of many blocks of code to be executed. This is the perfect 
solution for long, nested if/else statements.

The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed.

The switch statement is often used together with a break or a default keyword (or both). 
These are both optional:

The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If the break is omitted, the next code block in the switch statement is executed.

The default keyword specifies some code to run if there is no case match. 
There can only be one default keyword in a switch. Although this is optional, it is 
recommended that you use it, as it takes care of unexpected cases.

## Example: Execute a block of code based on user input

var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}

In conclusion, Moral gave us a presentation about the calculator on Thursday.