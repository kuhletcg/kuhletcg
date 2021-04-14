---
Layout: post
Title: Difference between useState and useSelector
Date: 2021-04-14
---

## Introduction

Today I want to share what I understand about useState and useSelector.The difference between useState and useSelector. Where do we use useState and useSelector.

## Body

### UseState

UseState should be used only inside functional components. useState is the way if we need an internal state and don't need to implement more complex logic such as lifecycle methods. const [state, setState] = useState(initialState); Returns a stateful value, and a function to update it.

## What is the use of useState in react?

A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

### UseSelector

We can use the useSelector hook to get the data from the Redux store in a React component. It takes 2 arguments. The first argument is a function that returns the state, and the second argument is a function that checks if the previous and current state is equal to determine when to update.

## What is the use of useSelector?

useSelector is a function that takes the current state as an argument and returns whatever data you want from it. It's very similar to mapStateToProps() and it allows you to store the return values inside a variable within the scope of your functional components instead of passing them down as props.
