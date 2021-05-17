---
Layout: post
Title: What is the context API?
Date: 2021-05-17
---

## When to use the Context API

As we mentioned earlier, the Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. In situations where we have these types of data, we can use the Context API and we don’t necessarily have to use extra modules.

In fact, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.

## How to use the Context API

With the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with. If you’ve previously attempted to use the old (experimental, do not use) Context API, you may have come across some methods. However, let’s look at some code snippets on how we can use the Context API.

## Conclusion

The Context API makes it easier to have our global and app-wide data available to all components, therefore, making it easier and more accessible. The Context API has been considered as one of the key features of the React framework and a prominent improvement in the recent releases of the framework.
