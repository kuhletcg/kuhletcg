---
Layout: post
Title: Calculation space using js
Date: 2021-06-28
---

## Introduction

Today I was busy with js basic and I was also busy with Moral's project(Admin app) and I'm almost with it. The only thing that is left is the edit button and validation. On free code camp I'm doing collapse courses (
Create Many Records with a model. create()

)

## Body

## Will be enough space?

- function enough(cap, on, wait) {
- return (on+wait > cap) ? on+wait-cap : 0;
- }

## Is your period late?

- function periodIsLate(last, today, cycleLength)
- {
- return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength
- }

## Is it a number?

- function isDigit(s) {
- return s==parseFloat(a)
- }

## Conclusion

What I learned today is that we use --save to save the package required for the application to run. When the following command is used with npm install this will save all your installed core packages into the dependency section in the package. JSON file. Core dependencies are those packages without which your application will not give desired results.
