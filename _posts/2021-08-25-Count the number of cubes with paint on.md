---
Layout: post
Title: Count the number of cubes with paint on
Date: 2021-08-25
---

Today I was busy with free code camp and I managed to figure out the problem that I was facing yesterday, I also did code wars kata.

## Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny and would like to greet him slightly differently. She added a special case to

## Solution

- function greet(name){
- if(name === "Johnny")
- return "Hello, my love!";
- return "Hello, " + name + "!";
- }

or

- function greet(name){
- return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
- }

## Count the number of cubes with paint on

Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as a parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

## Solution

- var countSquares = function(cuts){
- return (cuts ? 6 \* Math.pow(cuts, 2) + 2 : 1)
- }
