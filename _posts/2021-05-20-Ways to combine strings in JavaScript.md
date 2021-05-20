---
Layout: post
Title: Code wars kata
Date: 2021-05-20
---

## Four ways to combine strings in javascript

1. Template strings
   If you come from another language, such as Ruby, you will be familiar with the term string interpolation. That's exactly what template strings achieve. It's a simple way to include expressions in your string create which is readable and concise.

2. join()
   The join method combines the elements of an array and returns a string. Because it's working with an array, it's very handy if you want to add additional strings.

3. Concat()

With concat, you can create a new string by calling the method on a string.

4. Plus Operator(+)
   One interesting thing about using the + operator combining strings. You can use it to create a new string or you can mutate an existing string by appending it to it.

## Example

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
