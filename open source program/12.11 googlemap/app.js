var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);



app.get('/googlemap', function(req, res){
  res.sendfile("googleMapMarker.html");
});
app.get('/googlemap2', function(req, res){
  res.sendfile("googleMapRoute.html");
});
