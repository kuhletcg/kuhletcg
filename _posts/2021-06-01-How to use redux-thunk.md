---
Layout: post
Title: How to use redux thunk
Date: 2021-06-01
---

## Introduction

I want to share what I was busy with today. Today I was looking at redux-thunk. How to install it and how it works.

To understand how Redux-Thunk works, I am going to start by describing what it is.

## Body

Redux-thunk is a middleware that allows us to make some actions asynchronous. It allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of action or to dispatch only if a certain condition is met.

- First of all, you should add a redux-thunk package to your project

npm install redux-thunk

- Then, apply applyMiddleware when creating your app's store. Something like this in your index.js file

## Things that you have to import in index.js

- You have to import provider from react-redux
- You also have to import thunk from redux-thunk
- Import create store, applyMiddleware from redux
  .ect

Well, we should know the Redux pattern in which the store dispatches an action to the reducer, which takes that information in an action object to make changes to the state, causing components to re-render with new data.

## Conclusion

In conclusion, Thunk returns a function inside of our action creator instead of a plain JavaScript object. That returned function receives the store’s dispatch function, and then we are able to dispatch actions such as one to place the state in the loading state, and another to update our store with the returned data.
