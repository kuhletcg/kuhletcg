---
Layout: post
Title: Model in backend
Date: 2021-06-24
---

Backend Model – a class that allows operating with configuration data on the different stages (save, load).

## Backend:

Models: It connects with the database and we use it in controllers. (Intermediary between database and controllers)
Controllers: It does our logic for each endpoint. (Intermediary between Models and Routes)
Routes: It has a call route method (example: GET /api/users) and the controller to execute when it is call (Intermediary between controllers and Frontend)

## Frontend:

Simply call your API endpoint with fetch, Axios or your library selected)

If we recieve a call to /api/users we call to usersController

- app.get('/api/users', usersController)

## models

- const modelUser = {
- get: () => databaseCall('SELECT \* FROM users'); //Ey database give - me users
- }

The term data model can refer to two distinct but closely related concepts. Sometimes it refers to an abstract formalization of the objects and relationships found in a particular application domain: for example the customers, products, and orders found in a manufacturing organization.

At other times it refers to the set of concepts used in defining such formalizations: for example concepts such as entities, attributes, relations, or tables.

So the "data model" of a banking application may be defined using the entity-relationship "data model". This article uses the term in both senses.
