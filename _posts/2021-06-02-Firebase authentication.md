---
Layout: post
Title: Firebase authentication
Date: 2021-06-02
---

## Introdiction

Today I was looking at firebase authentication. The only thing I can say about firebase authentication is that isn't easy I have to muster it very well in order to understand how does it works, for now, I don't know anything but then I'm willing to learn more about firebase.

## Body

Firebase Authentication is necessary to grant read/write privileges to your users via security rules. We haven’t covered security rules yet, but just know that security rules rely on a users’ authentication status.

Firebase also allows for anonymous auth sessions, which are typically used to persist small amounts of data while waiting for a client to authenticate with a permanent auth method.

## Enabling Firebase Auth

1. First thing you need to do is go to https://firebase.google.com/ and make an account to gain access to their console. After you gain access to the console you can start by creating your first project.

2. Give the package name of your project (mine is info. android hive. firebase) in which you are going to integrate the Firebase. Here the google-services.json file will be downloaded when you press add app button.

3. Next go to your project dashboard. Find the Auth and click get started. Go to the set up sign-in method and choose Email & Password and enable it.

## Conclusion

What I have learned about firebase today is that firebase Auth includes a user management system. You can save some basic data against your Firebase Auth users, and you offer multiple login methods — email/password, Google, Facebook… — and link your users’ accounts into single Firebase Auth user accounts.
