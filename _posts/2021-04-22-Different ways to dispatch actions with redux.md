---
Layout: post
Title: Different ways to dispatch actions with redux
Date: 2021-04-22
---

## Introduction

In Javascript, Redux is used as state container for many apps, mostly with React. It relies on actions that get dispatched and listened by reducers, which update the state accordingly.

In this guide, we'll look at different ways of dispatching the action and at isolating the components from Redux.

## Passing dispatch method to our component

The dispatch method is available on the store object. An action gets dispatched to trigger an update to the Redux store.

## Using React-Redux to make dumb/smart components

The downside of the above approach is that our React component is aware of the app logic. It’s best to separate the logic in our smart component connected to the store from the user interface, i.e., from the dumb component. We can create a MessageSender.container.js in which we connect the component using the connect method. The second argument to connect is the function mapDispatchToProps, which is a wrapper for all the action creators using the dispatch method and is passed to the component.

## Passing callback function to our child component

It is considered good practice to call all actions from containers only. To do that, we can pass our callback function as props to all our child components. Thus, each child component would contain a list of all the callback functions defined in their prop types. The parent component can just pass function reference to each of our child component.

## Conclusion

We’ve looked at the various ways to dispatch actions with Redux. No single option is considered the best, as it fully depends on our use case. When we want to dispatch an action from our React component, we need to first connect it with the store and use the "connect" method of react-redux, i.e., the second approach discussed above. When we start having logic in our mapDispatchToProps function, we can dispatch action in our saga, i.e., the third approach, which we discussed in detail.
