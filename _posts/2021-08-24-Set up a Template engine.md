---
Layout: post
Title: Set up  a template engine
Date: 2021-08-24
---

Today I was busy with free code camp and I am stuck on this challenge(Set up a template engine), I try my best to figure out this problem but I failed. The first thing I'm going to do tomorrow is to figure out this problem.

A template engine enables you to use static template files (such as those written in Pug) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.

Add pug@~3.0.0 as a dependency in your package.json file.

Express needs to know which template engine you are using. We will use the set method to assign pug as the view engine property's value: app. set('view engine', 'pug')

Your page will not load until you correctly render the index file in the views/pug directory.

Change the argument of the res.render() declaration in the / route to be the file path to the views/pug directory. The path can be a relative path (relative to views), or an absolute path, and does not require a file extension.

If all went as planned, your app home page will stop showing the message "Pug template is not defined." and will now display a message indicating you've successfully rendered the Pug template!
