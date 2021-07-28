---
Layout: post
Title: MongoDB and Mongoose
Date: 2021-07-28
---

I want to share what I was doing today and what I have learned about MongoDB and mongoose.

Use model.findOne() to return a single matching document from your database.

Firstly I have learned that if we are looking for one result, we can call findOne() method on a model. Once again we give an object with our desired properties, and this time an object is returned. We also look at how we can look for items inside an array in the document, using $all operator.

1. Inside the findOneByFood function, call the findOne() method on the person model.

2. As the first argument, give an object with a key of 'favoriteFoods' and an object as the value.

3. Inside this object, give a key of $all and an array containing the 'food' variable as the value this will select all the documents that have the 'food' string inside the favoriteFoods array.

4. As the second argument, give a callback function taking in an error a result.

5. If there is an error, log it, otherwise, call the done() method, giving the arguments null (np error) and result.

example:

- var findOneByFood = function(food, done) {
- Person.findOne({favoriteFoods : {$all : [food]}}, (error, result) => {
  - if(error){
- console.log(error)
- }else{
- done(null, result)
- }
- })
- }

## model.finfOne()

behaves like find(), but it returns only one document (not array), even if there are multiple items. It is especially useful to search by properties that you have declared as unique.

## $all

The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
