---
Layout:
Title: How do you make a store on redux
Date: 2021-03-17
---

# What is Redux and why use it?

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React,
you can use it with any other JavaScript framework or library.

# What can I store in Redux?

With redux, you would ideally store as a little component state in your react
components themselves and instead move that to the redux state tree. I believe
a good point to start incorporating redux is when your app gets to a
a certain point where your components are no longer just "dumb" components
that display data.

# Should I store everything in Redux?

Yes, it's worth striving to store all component state in Redux. If you do, you will benefit from many features of Redux like time travel debugging and replayable bug reports. If you don't, those features could be completely unusable.

# What is a store in Redux?

A store is an immutable object tree in Redux. A store is a state container that holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.

Where is redux data stored?
Redux does store state. The VueJS corollary to Redux would be "Vuex". Redux uses internal memory for all data. For example, when you subscribe to Store, Redux
just push the listener to a private array and do not use Cookies or LocalStorage.
