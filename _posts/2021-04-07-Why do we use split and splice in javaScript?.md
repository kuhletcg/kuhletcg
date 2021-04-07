---
Layout: post
Title: Why do we use split and splice in javaScript?
Date: 2021-04-07
---

# How do we use split in JavaScript

The split() method is used to split a string into an array of substrings and return the new array. Tip: If an empty string ("") is used as the separator, the string is split between each character.

## How do you split an array?

split() is a method of String Object. It splits a string by separator into a new array. The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split

# What is splice in JS?

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

## Can you splice a string?

No, there is no such thing as a String. splice , but you can try this: newStr = str. ... I realise there is no splice function as in Arrays, so you have to convert the string into an array.

## Examples

## ReverseWords

- var string = "Are you angry at me?
- var reverseString = string.split (" "). reverse().join(" ");
- console.log(reverseString);

## Split words or sentence

- var string = Are you angry at me?
- var string = string. split("").join("");
- console.log(string);

## What is string join in Java?

The java string join() method returns a string joined with a given delimiter. In the string join method, the delimiter is copied for each element. In the case of a null element, "null" is added. The join() method is included in the java string since JDK 1.8. There are two types of join() methods in java string.
