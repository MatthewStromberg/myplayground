var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  console.log("Request made from URL: " + req.url);
  if (req.url == "/blah") {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    var readStream = fs.createReadStream(__dirname + '/package.json');
    readStream.pipe(res);

  } else if (req.url == "/" || req.url == "/home") {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end("404, Content not found");
    //    var readStream = fs.createReadStream(__dirname + '/404.html','utf8');
  }
});


server.listen(3000, '127.0.0.1');
console.log("Listening on port 3000...");