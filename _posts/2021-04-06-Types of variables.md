---
Layout: post
Title: Types of variables
Date: 2021-04-06
---

# The difference between var and let

At this point you may be thinking "why do we need two keywords for defining variables?? Why have var and let?".

The reasons are somewhat historical. Back when JavaScript was first created, there was the only var. This works basically fine in most cases, but it has some issues in the way it works — its design can sometimes be confusing or downright annoying. So, let was created in modern versions of JavaScript, a new keyword for creating variables that work somewhat differently to var, fixing its issues in the process.

A couple of simple differences are explained below. We won't go into all the differences now, but you'll start to discover them as you learn more about JavaScript (if you really want to read about them now, feel free to check out our let reference page).

For a start, if you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with var after you initialize it and it will still work. For example:

- myName = 'Chris';

- function logName() {
- console.log(myName);
- }

- logName();

- var myName;

# Variable types

There are a few different types of data we can store in variables. In this section we'll describe these in brief, then in future articles, you'll learn about them in more detail.

So far we've looked at the first two, but there are others.

## Numbers

You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating-point numbers). You don't need to declare variable types in JavaScript, unlike some other programming languages. When you give a variable a number value, you don't include quotes:

let myAge = 17;

## Strings

Strings are pieces of text. When you give a variable a string value, you need to wrap it in single or double quote marks; otherwise, JavaScript tries to interpret it as another variable name.

let dolphinGoodbye = 'So long and thanks for all the fish';

## Arrays

An array is a single object that contains multiple values enclosed in square brackets and separated by commas. Try entering the following lines into your console:

let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
Once these arrays are defined, you can access each value by its location within the array. Try these lines:

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
The square brackets specify an index value corresponding to the position of the value you want returning. You might have noticed that arrays in JavaScript are zero-indexed: the first element is at index 0.

You'll learn a lot more about arrays in a future article.

## Objects

In programming, an object is a structure of code that models a real-life object. You can have a simple object that represents a box and contains information about its width, length, and height, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more.

Try entering the following line into your console:

let dog = { name : 'Spot', breed : 'Dalmatian' };
