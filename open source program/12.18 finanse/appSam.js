var express = require('express');
var http = require('http');
var request = require("request");
var app = express();
var cors = require('cors');
app.use(cors());
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
var server = http.createServer(app).listen(80);

app.get('/stock1', function (req, res) {
	res.sendfile("stockFinalSam.html");
});

app.get('/samsung', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005930|SERVICE_RECENT_ITEM:005930&_callback=window.__jindo2_callback._1931', //URL to hit
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});


app.get('/stock2', function (req, res) {
	res.sendfile("stock2.html");
});

app.get('/getStockPrice0', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005930|SERVICE_RECENT_ITEM:005930&_callback=window.__jindo2_callback._1931',
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});

app.get('/getStockPrice1', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:066570|SERVICE_RECENT_ITEM:066570,005930&_callback=window.__jindo2_callback._7576',
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});

app.get('/getStockPrice2', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:000660|SERVICE_RECENT_ITEM:000660,066570,005930&_callback=window.__jindo2_callback._4941',
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});

app.get('/getStockPrice3', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005380|SERVICE_RECENT_ITEM:005380,000660,066570,005930&_callback=window.__jindo2_callback._2347',
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});

app.get('/getStockPrice4', function (req, res) {
  request({
    url: 'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:023530|SERVICE_RECENT_ITEM:023530,005380,000660,066570,005930&_callback=window.__jindo2_callback._1755',
    headers: {
      'Content-Type': 'content=text/html; charset=euc-kr'
    },
    method: 'GET',
    encoding: null,
  }, function(error, response, body) {
    data = iconv.convert(body).toString();
    res.send(data);
  });
});
