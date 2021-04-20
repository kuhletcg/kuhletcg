---
Layout: post
Title: Remove first and last character
Date: 2021-04-20
---

## How do you remove the first character of a string in Java?

Use the substring() function with an argument of 1 to get the substring from position 1 (after the first character) to the end of the string (leaving the second argument out defaults to the full length of the string). Use substring() and give the number of characters that you want to trim from the front.

## How do I remove the first character of a string?

## There are three ways in JavaScript to remove the first character from a string:

- Using substring() method. The substring() method returns the part of the string between the specified indexes or to the end of the string. ...
- Using slice() method. ...
- Using substr() method.

## Description:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

## Solution

function removeChar(str) {
return str.slice(1, -1);
}
