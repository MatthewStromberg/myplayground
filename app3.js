const express = require('express');
const fs = require('fs');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.listen(3000); //Listening to port 3000
app.get("/test/", function(req, res) {
  res.send("<h1>Test directory!</h1>");
});

app.get('/:name', function(req, res) {
  var path = req.params.name;
  if (!fs.existsSync(path)) {
    console.log("Profile is rendered");
    res.render('profile', {
      name: req.params.name
    });
  } else {
    res.sendFile(__dirname + "/" + req.params.name);

  }

});

/*app.use(function(req, res) {
  res.send("Not found!");
});
*/