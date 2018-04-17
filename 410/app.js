var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'test'
});

var server = http.createServer(app).listen(80);
connection.connect();
console.log("hello nodejs");

app.get('/test', function(req, res) {
  res.send('hello 조준형112223333');
});

app.get('/cssPractice', function(req, res) {
  res.sendfile('css실습1.html');
});

app.get('/getAllMember2', function(req, res) {
  connection.query('select * from member2',
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/getAuthcode1or2', function(req, res) {
  connection.query('select * from member where authcode=1 or authcode=2',
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
app.get('/getNameFromBoard', function(req, res) {
  connection.query('select name from member where id in (select id from board)',
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
app.get('/getEmailOfAdmin', function(req, res) {
  connection.query("select email from member where authcode = \
	(select authcode from auth where authority='관리자')",
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
app.get('/getLongestEmail', function(req, res) {
  connection.query("select * from member where length(email) = \
	(select max(length(email)) from member)",
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
