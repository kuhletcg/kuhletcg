---
Layout: post
Title: Modal in react
Date: 2021-06-11
---

## Introduction

While I was doing my project (recipe box) I had to use modal.
So today I going to explaining why do we need modal in react and explaining the importance of modal in react.

## Body

I will start by explaining what is modal in react js. A modal is a message box that is displayed on top of your screen. Modals put an overlay on the screen; therefore, they take visual precedence over all the other elements.

A Modal can also be without an animation. For that set the "animation" prop to false. The Modal Header, Title, Body, and Footer components are available as static properties of the <Modal/> component, but you can also, import them directly like: require("react-bootstrap/ModalHeader").

## How do I use bootstrap modal react?

To get started with using Bootstrap in your React application, you need to install the react-bootstrap package from npm along with the bootstrap v4 package. You will need to install regular Bootstrap for the CSS. After the installation is complete, you can import the modal component and the styling into your module.

## Is setState asynchronous?

To update the state of a component, you use the setState method. However, it is easy to forget that the setState method is asynchronous, causing tricky debug issues in your code. The setState function also does not return a Promise.

## Example

## Showing modals with react-modal

import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
const [isOpen, setIsOpen] = useState(false);

function toggleModal() {
setIsOpen(!isOpen);
}

## Conclusion

What I have learned about displaying modal dialogs in React with the react-modal package. It provides the Modal component that takes care of modal positioning and displaying an overlay. I also reviewed alternative solutions for displaying modals in React that you might find useful.
