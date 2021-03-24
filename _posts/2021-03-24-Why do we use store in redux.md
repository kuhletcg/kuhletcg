---
Layout: post
Title: Why do we use store in redux
Date: 2021-03-24
---

# Introduction

Store - is the object that holds the application state and provides a few helper methods to access the state, dispatch actions, and register listeners. ... Any action returns a new state via reducers. That makes Redux very simple and predictable.

# Body

## What should I store in Redux?

With redux, you would ideally store as little component state in your react components themselves and instead move that to the redux state tree. I believe a good point to start incorporating redux is when your app gets to a certain point where your components are no longer just "dumb" components that display data.

## What is redux store in react?

Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree. To create a store the create store(reducer, [initialState], [enhancer]) function is used to create a new store. It takes three arguments: reducer - A reducing function.

## What is the significance of the store in Redux?

A store is an immutable object tree in Redux. A store is a state container that holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.

With redux, you would ideally store as little component state in your react components themselves and instead move that to the redux state tree. I believe a good point to start incorporating redux is when your app gets to a certain point where your components are no longer just "dumb" components that display data.

## Where is Redux used?

Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism that can be used by any other code.

# Conclution

## Tip for better redux architecture

- Understand the benefits of redux.
- Some Apps don't need redux.
- Understand reducers.
- Reducers must be a pure function.
- Remember: Reducers must be the single source of truth.
- Use actions creators to decouple action login from dispatch callers
