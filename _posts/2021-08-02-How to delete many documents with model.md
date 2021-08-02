---
Layout: post
Title: How to delete many documents with model
Date: 2021-08-02
---

## Introduction

I will share about the problem that the freecodecamp challenged named "Delete many documents with a model. remove()

## Body

The challenge required a Model. remove() to delete all the documents matching the given criteria.

Modify the removeManyPeople function to delete all the people whose name is within the variable nameToRemove, using Model. remove(). Pass it to a query document with the name fieldset, and a callback.

The Model. remove() doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the done() callback, since we use it in tests.

## Conclusion

In conclusion, I have learned that MongoDB stores data records as documents (specifically BSON documents) which are gathered together in collections. A database stores one or more collections of documents.
