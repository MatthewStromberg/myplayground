const express = require('express');
const fs = require('fs');

var app = express();
//var fs = fs();

app.listen(3000); //Listening to port 3000
app.get("/test/", function(req, res) {
  res.send("<h1>Test directory!</h1>");
});

app.get('/:name', function(req, res) {
  var path = req.params.name;
  if (!fs.existsSync(path)) {
    res.send("DOES NOT EXIST");
  } else {
    res.sendFile(__dirname + "/" + req.params.name);

  }
});