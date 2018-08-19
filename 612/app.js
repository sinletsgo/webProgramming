var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

var server = http.createServer(app).listen(80);


app.get('/test', function(req, res) {
  res.send('hello 신성');
});

app.get('/getFile', function(req, res) {
  res.sendfile('ajax.html');
});

app.get('/getRequest', function(req, res){
  console.log(req.query);
  res.send("your querystinrg is : " + req.query.a + req.query.b )
});


app.get('/getFile2', function(req, res) {
  res.sendfile('requestTest.html');
});

app.get('/request1', function(req, res) {
  res.send('response1');
});
app.get('/request2', function(req, res) {
  res.send('response2');
});
app.get('/request3', function(req, res) {
  res.send('response3');
});


app.get('/getFile3', function(req, res) {
  res.sendfile('requestTest2.html');
});


app.get('/check', function(req, res) {
  console.log("req.query.price: ", req.query.price);
  var item = "구입불가"
  var itemList =[
    { name: 'item1', price: 1000},
    { name: 'item2', price: 2000},
    { name: 'item3', price: 5000},
    { name: 'item4', price: 10000},
    { name: 'item5', price: 30000},
    { name: 'item6', price: 50000},
    { name: 'item7', price: 100000}
  ];

  for (var i = 0; i < itemList.length; i++) {
    if (req.query.price >= itemList[i].price ) {
        item = itemList[i].name
    }
  }
  res.send(item);
})
