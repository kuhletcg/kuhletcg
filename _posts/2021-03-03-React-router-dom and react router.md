---
Layout: post
Title: The difference between React router and react-router-dom
Date: 2021-3-03
---

# Introduction

## React router

A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing.

# Body

## What is the use of react-router?

React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

## What is the difference between React router and react-router-dom?

In v4, the react-router exports the core components and functions. react-router-dom exports DOM-aware components, like <Link> ( which renders <a> ) and (which interacts with the browser's window. ... react-router-dom re-exports all of react-router's exports, so you only need to import from react-router-dom in your project.

## Is react-router built into react?

React Router is built and maintained by React Training and hundreds of contributors.

## Example of the router

- <Route exact path="/"><Home /></Route>
- <Route path="/category"><Category /></Route>
- <Route path="/products"><Products /></Route>
- <Route path="/:id">
- <p>This text will render for any route other than '/'</p>
- </Route>

# Conclusions

In conclusion, I also learned that React is a versatile and highly modular front-end framework. Developing an application with react requires a design/mechanism of how the components are interconnected to each other to be able to serve certain functionality. Following this perspective, this post tries to breakdown the mechanism for filtering a set of a list based on certain input and render the components accordingly.
