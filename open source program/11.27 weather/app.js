var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);





app.get('/weatherPage1', function(req, res){
  res.sendfile("weather1.html");
});
app.get('/weatherPage2', function(req, res){
  res.sendfile("weather2.html");
});
app.get('/weatherPage3', function(req, res){
  res.sendfile("weather3.html");
});
app.get('/weatherPage4', function(req, res){
  res.sendfile("weather4.html");
});
app.get('/weatherPage5', function(req, res){
  res.sendfile("weather5.html");
});
app.get('/weatherPage6', function(req, res){
  res.sendfile("weatherChart.html");
});
app.get('/weatherPage7', function(req, res){
  res.sendfile("weatherChart2.html");
});
app.get('/weatherPage8', function(req, res){
  res.sendfile("weatherChart3.html");
});



  // 이젠 나 - 교수님서버 - sk 플래닛   에서
 // 서버html파일- 내서버 - 교수님서버 - sk플래닛  추가 시킬것
 // 클라이언트 - 서버  로는 막혀서 못받는데, 클라이언트(나)- 내서버- sk플래닛
 // 통해서는 가능한것도 있다.

 // cmd - 파일있는곳에서 npm install request
 // weather4 에서 이젠 내 라우터 서버로(getWeather)로 요청보내서
 // 내 라우터 서버가 교수님서버로 요청보내도록.


var request = require('request');

app.get('/getWeather', function(req, res){
  console.log(req.query);
  request({
    url:'http://192.168.170.177/getWeather?lon='+req.query.lon +"&lat="
    +req.query.lat +"&version=&appKey=" +req.query.appKey
    +"&weatherState=" +req.query.weatherState,
    method:'GET'
  }, function(error, response, body){
    res.send(JSON.parse(body));
  }
)
});
