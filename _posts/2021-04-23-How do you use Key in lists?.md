---
Layout: post
Title: How do you use Key in lists?
Date: 2021-04-23
---

## Introduction

My day was busy, I was busy with Moral's project, I was doing the edit button and I'm still struggling I'm still trying to do it. I also checked how do to use Keys in lists.

## Body

## React List and Keys

Lists are an important aspect of your app. Every application is bound to make use of lists in some form or the other. You could have a list of tasks like a calendar app, a list of pictures like Instagram, a list of items to shop in a shopping cart, and so on. The use-cases are numerous. Lists within an application can be performance-heavy. Imagine an app with a huge list of videos or pictures and you keep getting thousands more, as you scroll. That could take a toll on the app’s performance.
Because performance is an important aspect, when you are using lists you need to make sure they are designed for optimal performance.

Keys help React identity which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

## Conclusion

- Let’s recap the highlights from this post.
- Lists are performant heavy and need to be used carefully.
- Make sure every item in the list has a unique key.
- It is preferred to not use indexes as a key unless you know for sure that the list is a static list (no additions/re-ordering/removal to the list).
- Never use unstable keys like Math. random() to generate a key.
- React will run into performance degradation and unexpected behavior if unstable keys are used.
