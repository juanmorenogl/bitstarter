#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var outfile = "index.html";
var app = express.createServer(express.logger());

var texto = fs.readFileSync(outfile); 
buff = new Buffer(texto);

app.get('/', function(request, response) {
//  response.send('Hello World!');
//response.send(fs.readFileSync(outfile));
	response.send(buff.toString('utf8', 0, buff.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
