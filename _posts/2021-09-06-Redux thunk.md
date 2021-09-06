---
Layout: post
Title: Redux thunk
Date: 2021-09-06
---

## What is a thunk?

A thunk is a subroutine used to add an additional calculation into another subroutine. They are used to setback calculations until the results of the calculations are needed elsewhere. They have different other applications in compiler code generation and modular programming.

## How does it work?

It is done in source code by wrapping an argument in an anonymous function that has no params of its own, thus preventing the expression from being evaluated until a receiving function calls the anonymous function.
