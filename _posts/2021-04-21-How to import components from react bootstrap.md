---
Layout: post
Title: How to import components from react bootstrap
Date: 2021-04-21
---

# Introduction

Today I was checking to react-bootstrap, how does it work.
React Bootstrap is one of the widely used libraries in React, and its various components are used in React apps to make them mobile-friendly. It has tons of components that give apps the various details of layout, form controls, information indicators, and navigational components.

In this guide, you are going to learn how to add React Bootstrap into a React app by importing and using the React Bootstrap components in your React components.

## Body

The first thing you need to do is, Adding React Bootstrap into a React App

- Install the React Bootstrap library by using the below npm command.

## How to install react-bootstrap

- npm install react-bootstrap bootstrap

## Importing Components from React Bootstrap

Now that you have installed the bootstrap library and configured the CSS file into your app, it’s time to import the components from react-bootstrap.

## The basic syntax for importing anything from react-bootstrap looks like this:

- import { COMPONENT_NAME } from 'react-bootstrap';
  jsx

Or:

- import COMPONENT_NAME from 'react-bootstrap/COMPONENT_NAME';

## Conclusion

In this guide, I have learned the various methods for importing components, like importing single components, individual components, dynamic components, and multiple components using a single import statement.

You can choose any of these methods, but when it comes to the performance, the multiple components import statement or individual component import are way better than the others.
