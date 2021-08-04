---
Layout: post
Title: Quality assurance and testing with Chai
Date: 2021-08-04
---

I will share the problem that the free code camp challenged named "Run functional tests on API Endpoints using Chai-HTTP".

- These are the following things that I'm required to do.

Within tests/2_functional-tests.js, alter the 'Test GET /hello with no name' test (// #1) to assert the status and the text response to make the test pass. Do not alter the arguments passed to the asserts.

There should be no name in the query; the endpoint responds with hello Guest.

- All tests should pass

- You should test for 'res.status' == 200

- You should test for 'res.text' == 'hello Guest'

This is was I have done below but it doesn't work so I do not where I did wrong and I'm stacked in this challenge.

test('Test GET /hello with no name', function(done) {
chai
.request(server) // 'server' is the Express App
.get('/hello') // http_method(url). NO NAME in the query !
.end(function(err, res) {

      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello Guest');
      done();
    });

});
