---
Layout: post
Title: How hooks work in react?
Date: 2021-05-05
---

## How hooks work in react?

A Hook is a react function that lets you use state and react features from a function-based component. Hooks let you use the functions instead of switching between HOCs, Classes, and functions. As Hooks are regular Javascript functions, thus you can use the built-in Hooks and create your own custom one.

## What are react hooks and why we need it?

Hooks let us organize the logic inside a component into reusable isolated units: Hooks apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components. That's why I feel that Hooks are a natural fit for the React component model.

## When to use a Hooks

If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class. But, now you can do it by using a Hook inside the existing function component.

## Rules of Hooks

Hooks are similar to JavaScript functions, but you need to follow these two rules when using them. Hooks rule ensures that all the stateful logic in a component is visible in its source code. These rules are:

1. Only call Hooks at the top level
   Do not call Hooks inside loops, conditions, or nested functions. Hooks should always be used at the top level of the React functions. This rule ensures that Hooks are called in the same order each time a component renders.

2. Only call Hooks from React functions
   You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components. Hooks can also be called custom Hooks.
