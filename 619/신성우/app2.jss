var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app).listen(60);




app.get('/getFile', function(req, res) {
  res.sendfile('exam.html');
});

app.get('/getCarPrice', function(req, res) {

  console.log("req.query: ", req.query.car, req.query.color);

  var car = req.query.car;
  var color = req.query.color;

  console.log(car);
  console.log(color);

  var EstimateCarArray =[2100, 1300, 1500, 3500, 3200];
  var EstimateColorArray =[100, 120, 200, 130, 80];

  var carValue = EstimateCarArray[car];
  var colorValue = EstimateColorArray[color];

  console.log(carValue);
  console.log(colorValue);

  var EstimateResultValue = carValue + colorValue;

  res.send(EstimateResultValue + "만원" );

});
