---
Layout: post
Title: Create new middleware
Date: 2021-08-31
---

As is, any user can just go to /profile whether they have authenticated or not, by typing in the URL. We want to prevent this, by checking if the user is authenticated first before rendering the profile page. This is the perfect example of when to create a middleware.

The challenge here is creating the middleware function ensureAuthenticated(req, res, next), which will check if a user is authenticated by calling passport's isAuthenticated method on the request which, in turn, checks if req. user is defined. If it is, then next() should be called, otherwise, we can just respond to the request with a redirect to our homepage to log in. An implementation of this middleware is:

- function ensureAuthenticated(req, res, next) {
- if (req.isAuthenticated()) {
- return next();
- }
- res.redirect('/');
- };
  Now add ensureAuthenticated as a middleware to the request for the profile page before the argument to the get request containing the function that renders the page.

- app
- .route('/profile')
- .get(ensureAuthenticated, (req,res) => {
- res.render(process.cwd() + '/views/pug/profile');
- });

1. Middleware ensureAuthenticated should be implemented and on our /profile route.

2. A Get request to /profile should correctly redirect to / since we are not authenticated.

## Solution

- app.route('/profile').get(ensureAuthenticated, (req,res) => {
- res.render(process.cwd() + '/views/pug/profile');
- });

- function ensureAuthenticated(req, res, next) {
- if (req.isAuthenticated()) {
- return next();
- }
- res.redirect('/');
- };
