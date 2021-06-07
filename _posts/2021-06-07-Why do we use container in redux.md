---
Layout: post
Title: Why do we use container in redux
Date: 2021-06-07
---

## Introduction

The purpose of the container is to map the state and dispatch props for the presentational component. React, Redux is an independent library. ... Redux is a framework that prescribes a specific philosophy for storing and managing data in JS environments.

## Body

## What is the difference between container and component?

A component represents an object with graphical representation. The class Container is the superclass for the containers of AWT. The container object can contain other AWT components.

State Container = Single Source of Truth

The core of Redux architecture is the container that holds all the application's state information. This container is conventionally called the “store” in Redux. That store holds the application's state as a group of plain objects and arrays.

## What does a state container do?

Generally, state containers serve 2 purposes, which are: Store the global state of your application (i.e. state that is not related to 1 particular component in the app, but rather to the app as a whole); Deliver changes to components.
