---
Layout: post
Title: How to set react router default route redirect to /home
Date: 2021-06-09
---

## Introduction

Routing allows us to configure an app that accepts various URLs and is mapped to specific components. Once the matching URL is found, then the matching page/component will be rendered into the HTML DOM.

The routing works by comparing the URL against the specified list of routes in our React app. Each route is linked to a <Route> component where we have configured the complete routing configuration.

## Body

## Switch

Switch components are used to render the default components once the app is rendered, and it will switch between routes as needed.

## Route

The route is a statement that holds the specific path of the app along with the component’s name and renders it once it matches the URL.

## Link

The link is similar to the HREF link, which allows you to redirect to the specific components based on the specified path.

## Conclusion

The routing is the first configuration that any app needs, and you have learned one of the best approaches to redirect components to the default route even if you have an empty path into the URL.
