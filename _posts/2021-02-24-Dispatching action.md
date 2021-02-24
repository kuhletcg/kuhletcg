---
Layout: post
Title: Dispatching action
Date: 2021-02-23
---

# Introduction

My day was hectic, I was busy with Moral activity since in the morning. Even now I'm still busy with it but I'm straggling, I don't know how to add redux in my app. I did watch some tutorials but still, I didn't found the solution. Redux is not easy for me but I'm willing to learn how does it work. I will take it to step by step until I know how does it work.
While I was watching tutorials, I came up with new words like dispatch action,

# Body

## What is dispatch?

Dispatch is a function of the Redux store. You call the store. dispatch to dispatch an action. This is the only way to trigger a state change.

## Two Forms of mapDispatchToProps

The mapDispatchToProps parameter can be of two forms. While the function form allows more customization, the object form is easy to use.

Function form: Allows more customization, gains access to dispatch, and optionally ownProps
Object shorthand form: More declarative and easier to use.

## 4 WAYS TO DISPATCH ACTIONS WITH REDUX

- Simply pass the dispatch method to your component.
- Use react-redux and make a dumb and a smart component.
- Dispatch action from a saga.
- Use the induction creators' method.

# Conclusion

We’ve looked at the various ways to dispatch actions with Redux. No single option is considered the best, as it fully depends on our use case. When we want to dispatch an action from our React component, we need to first connect it with the store and use the "connect" method of react-redux, i.e., the second approach discussed above.
