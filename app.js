
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');

var app = express();

app.get('/hello', function(req, res){
  res.send('Hello World!');
});

http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port 8080');
});
