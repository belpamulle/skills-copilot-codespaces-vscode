// Create web server
// Load the comments from the database
// Send the comments to the browser

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var db = require('./db');

app.get('/comments', function (req, res) {
  db.getComments(function (err, comments) {
    if (err) {
      res.status(500).send('Database error');
    } else {
      res.json(comments);
    }
  });
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});