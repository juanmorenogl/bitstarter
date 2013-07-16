var express = require('express');
var fs = require('fs');
var outfile = "index.html";
//var buf = fs.readFileSync(outfile);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World!');
//response.send(fs.readFileSync(outfile));

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
//  console.log(data);
response.send(data);
});


//var xx = buf.toString('utf8', 0, buf.length);
//response.send(xx));
//});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
