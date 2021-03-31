---
Layout: post
Title: Convert string to an array
Date: 2021-03-31
---

## Description:

Write a function to split a string and convert it into an array of words. For example:
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
\*/

## Solution

function stringToArray(string){
return string.split(' ');
}

## Description

Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word `' are '`

## Solution

var TempleStrings = function(obj, feature) {
return `${obj} are ${feature}`
}
