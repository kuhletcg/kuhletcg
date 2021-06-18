---
Layout: post
Title: React phone number validation example
Date: 2021-06-18
---

## Introduction

Today I was checking how do we validate because for a project that we are given we are required to validate id number.
I found a solution so I was trying to apply it in my project but I didn't win yet. On Monday I will continue with validation.

## Body

Now, let's see a tutorial of react validation for phone numbers. This post will give you a simple example of mobile number validation in react js. I would like to share with you react form validation for phone number. step by step explain react js mobile number validation.

Form validation is a primary part of any application. we always require to add input validation when we are adding form in our application. if you need to add phone number validation like it must be 10 digit mobile number or 11 digit, 12 digit then you can easily do it from this example.

So, here I will give you step-by-step instructions on how to add phone number validation in react js application. in this example we will take name, email, phone and comment input and add validation for require, email and phone 10 digit now. also, display error messages if they enter wrong values.

## The solution that got while I was checking validation

- if (typeof input["phone"] !== "undefined") {

  - var pattern = new RegExp(/^[0-9\b]+$/);

  - if (!pattern.test(input["phone"])) {

  - isValid = false;

  - errors["phone"] = "Please enter only number.";

  - }else if(input["phone"].length != 10){

- isValid = false;

  - errors["phone"] = "Please enter valid phone number.";

  - }

- }

## Conclusion

In conclusion my day was hectic , this thing of validate id number is giving me stress but I will try all my best.
