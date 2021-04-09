---
Layout: post
Title: Component state
Date: 2021-04-09
---

# Component State

## What does setState do?

setState() schedules an update to a component’s state object. When the state changes, the component responds by re-rendering.

What is the difference between state and props?
props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas the state is managed within the component (similar to variables declared within a function).

Here are some good resources for further reading on when to use props vs state:

- Props vs State
- ReactJS: Props vs. State

## How do I update the state with values that depend on the current state?

Pass a function instead of an object to setState to ensure the call always uses the most updated version of state (see below).

What is the difference between passing an object or a function in setState?
Passing an update function allows you to access the current state value inside the updater. Since setState calls are batched, this lets you chain updates and ensure they build on top of each other instead of conflicting:

# Why doesn’t React update this. state synchronously?

As explained in the previous section, React intentionally “waits” until all components call setState() in their event handlers before starting to re-render. This boosts performance by avoiding unnecessary re-renders.

However, you might still be wondering why to React doesn’t just update this. state immediately without re-rendering.

There are two main reasons:

- This would break the consistency between props and state, causing issues that are very hard to debug.
- This would make some of the new features we’re working on impossible to implement.
