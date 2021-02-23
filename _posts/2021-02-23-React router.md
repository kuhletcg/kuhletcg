---
Layout: post
Title: React router
Date: 2021-02-23
---

# Introdution

I want to share what share I have learned today. I will explain how do react-router works, what is react-router and how to install a react-router, or how to set up routing for an app.

# Body

## React Router

React router- is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native.

React router works wherever React is rendering.

## How to install react-router

## Step 1 - Install a React Router

A simple way to install the react-router is to run the following code snippet in the command prompt window.

C:\Users\username\Desktop\reactApp>npm install react-router

## Step 2 -Create Components

In this step, we will create four components. The App component will be used as a tab menu. You can use three components like(Home), (About), and (Contact) are rendered once the route has changed.

## Step 3 - Add a Router

Now, we will add routes to the app. Instead of rendering the App element like in the previous example, this time the Router will be rendered. We will also set components for each route.

## How do we pass props in react-router?

Passing function as a component prop in Route component

Internally, react-router uses React. createElement to render the component passed to the component props. If we pass a function to it, it will create a new component on every render instead of just updating the existing component.

# Conclusion

So there we have it. If you want to easily navigate around a React app, forget the anchor tags and add React Router. It's clean, it's organized, and it makes adding and deleting pages a whole lot easier.
