---
Layout: post
Title: What is an action in Redux
Date: 2021-03-25
---

## What is an action in Redux?

Actions are the only source of information for the store as per Redux's official documentation. It carries a payload of information from your application to store. As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.

## What is action and reducer in Redux?

A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. ... Redux relies heavily on reducer functions that take the previous state and action in order to execute the next state. We're going to focus squarely on reducers is in this post.

## What is the action payload in Redux?

Payload is what is keyed ( the key-value pairs ) in your actions and passed around between reducers in your redux application. For example - const someAction = { type: "Test", payload: {user: "Test User", age: 25}, } This is a generally accepted convention to have a type and a payload for an action

## What are actions and reducers?

Reducers- As we already know, actions only tell what to do, but they don't tell how to do it, so reducers are the pure functions that take the current state and action and return the new state and tell the store how to do.

## 4 ways to dispatch actions with Redux

- Simply pass the dispatch method to your component. The dispatch method is a method of the store object. ...
- Use react-redux and make a dumb and a smart component. ...
- Dispatch actions from a saga. ...
- Use the bind action creators method. ...
  So, what should I use?
