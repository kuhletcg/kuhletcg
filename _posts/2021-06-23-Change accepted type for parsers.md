---
Layout: post
Title: Change accepted type for parsers
Date: 2021-06-23
---

All the parsers accept a type option that allows you to change the Content-Type that the middleware will parse.

## Express route-specific

This example demonstrates adding body parsers specifically to the routes that need them. In general, this is the most recommended way to use body-parser with Express.

To include body-parser in our application, use the following code. The body-parser object has two methods, bodyParser.json() and bodyParser.urlencoded(). The data will be available in req. body property.

- var express = require('express')
- var bodyParser = require('body-parser')

- var app = express()

- app.use(bodyParser.json({ type: 'application/\*+json' }))

- app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

- app.use(bodyParser.text({ type: 'text/html' }))
