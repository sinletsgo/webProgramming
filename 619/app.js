var express = require('express');

var http = require('http');
var app = express();

var server = http.createServer(app).listen(60);




app.get('/getFile', function(req, res) {
  res.sendfile('dictAjax.html');
});


app.get('/check', function(req, res) {

  console.log("req.query: ", req.query.lang, req.query.context);


  // querystring 받은거 데이터를 변수에 저장해야 쓸 수있지.
  // 배열도 선언해놓고 넣어야 ..
  //
  var context = req.query.context
  var lang = req.query.lang
  var translateArrayResult = ""
  var translateArray = [];
  translateArray[0] =["Good morning", "nice to meet you", "Thank", "Sorry", "how much"]
  translateArray[1] =["こんにちは", "はじめまして", "ありがとうございます", "申し訳ありません", "いくらですか"]


  translateArrayResult = translateArray[lang][context] // 이부분에서   translateArrayResult = [0][0] 이짓을 하고 있으니.. --
  console.log(translateArrayResult);

  res.send(translateArrayResult);
});


app.get('/test', function(req, res){
  res.send("hello world!!!");
});
