//jshint esversion:6

const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.send(index.html);
});

app.get("/contact", function(req, res) {
  res.sendFile('/index.html', {root: __dirname });
});

app.listen(3000, function() {
  console.log('Server started on Port 3000');
});
