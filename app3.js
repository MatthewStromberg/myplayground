const express = require('express');
const fs = require('fs');

var app = express();
//var fs = fs();

app.listen(3000); //Listening to port 3000
app.get('/:name', function(req, res) {
  if (!fs.existsSync(path)) {
    // Do something
    res.send("DOES NOT EXISTS");
  } else {

    res.send(__dirname + '/' + req.params.name + ".html");
  }
});