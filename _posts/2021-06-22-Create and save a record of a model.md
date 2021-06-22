---
Layout: post
Title: Create and save a record of a model
Date: 2021-06-22
---

## Introduction

I am currently on the MongoDB and Mongoose section of FreeCodeCamp.
So today I was busy with the other challenge says create and save a record of a model. I am not done yet with this challenge I was checking how can I solve this problem.

## Body

I have created the person schema and constructor but I am not too sure about what is still missing and how to piece it all together to implement the solution.

## Here is an example of what I have done

- var Schema = mongoose.Schema;

- var personSchema = new Schema({
- name: {
- type: String,
- required: true
- },
- age: Number,
- favoriteFoods: [String]
- });
- var Person = mongoose.model('Person', personSchema);

- joe.save(function(err, persons) {
- if(err){
  - console.log("Failed");
- } else {
- console.log("Saved Successful");
- console.log(persons);
- }
- });

## Conclusion

In conclusion that's how my day was been.
