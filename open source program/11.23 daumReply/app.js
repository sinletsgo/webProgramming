var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);


// app.get('/test2', function(req, res){
//   res.send("<ol>hello ! node ! yo </ol>");
// });


app.get('/daumReplyPage', function(req, res){
  res.sendfile("daumReply.html");
});
app.get('/timerPage', function(req, res){
  res.sendfile("time.html");
});
app.get('/daumReplyPage2', function(req, res){
  res.sendfile("daumReply2.html");
});

// daumReply2 선생님 한것
app.get('/daumReplyPage3', function(req, res){
  res.sendfile("daumReply3.html");
});
