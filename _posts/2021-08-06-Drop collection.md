---
Layout: post
Title: Drop collection
Date: 2021-08-06
---

Today I was looking at the node.js MongoDB while I looking at it I come across the word "Drop collection".

You can delete a table, or collection as it is called in MongoDB, by using the drop() method.

The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.

## Example

Delete the "customers" table:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
dbo.collection("customers").drop(function(err, delOK) {
if (err) throw err;
if (delOK) console.log("Collection deleted");
db.close();
});
});
