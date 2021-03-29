---
Layout: post
Title: What is redux store in redux
Date: 2021-03-29
---

## What is redux store in react?

Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree. To create a store the create store(reducer, [initialState], [enhancer]) function is used to create a new store. It takes three arguments: reducer - A reducing function.

## Should I store everything in Redux?

Yes, it's worth striving to store all component state in Redux. If you do, you will benefit from many features of Redux like time travel debugging and replayable bug reports. If you don't, those features could be completely unusable.

## Where is the redux store saved?

Redux does store state. The VueJS corollary to Redux would be "Vuex". Redux uses internal memory for all data. For example, when you subscribe to Store, Redux just pushes the listener to a private array and does not use Cookies or LocalStorage.

## Does Dispatch return a promise?

When the fetchTodos actions are dispatched, it would wait for the response and build a receive todos action and return it as a promise. Since it's a promise, the addPromiseSupportToDispatch would chain the then(rawDispatch) at the end of it.
