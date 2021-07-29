---
Layout: post
Title: Introduction to environment variables and how to use them
Date: 2021-07-29
---

I will start by explaining what are environment variables. Two fundamental components of any computer programming language are variables and constants. Like independent variables in a mathematical equation, these take on values that change the results of the program. Variables and constants both represent unique memory locations containing data the program uses in its calculations. The difference between the two is that variables values may change during execution, while constant values cannot be reassigned.

An environment variable is a variable whose value is set outside the program, typically through a functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

## Environment Variables in the dotenv Package

Support for using environment variables in frontend applications isn’t an “out-of-the-box” feature of either the browser or Javascript; a package like dotenv is required to enable it. For the record, both frontend and backend applications may utilize dotenv.

- Using this package is as easy as,
  import dotenv from 'dotenv';
  dotenv.config();
  console.log(process.env.REACT_APP_METEORITE_STRIKE_DATASET);

I also did a kata

- Description
  Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

- I love you
- a little
- a lot
- passionately
- madly
- not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts, and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

Solutions

- const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

         or

- const phrases = [
- 'I love you',
- 'a little',
- 'a lot',
- 'passionately',
- 'madly',
- 'not at all',
- ]

- function howMuchILoveYou(n) {
- return phrases[(n - 1) % phrases.length]
- }
