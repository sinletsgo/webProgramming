var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();


// npm install express
// npm install mysql
// 하위 설치해놓으면 오류 날수도. 상위에 설치해놓으면 하위에서는 알아서 찾는 규칙이 있음.

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
  res.send('hello 신성');
});

app.get('/cssPractice', function(req, res) {
  res.sendfile('css실습1.html');
});



var sql = 'select * from member2'
app.get('/getAllMember2', function(req, res) {
  connection.query(sql,
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
  // sql 줄바꿈시 \ 해주면 된다
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




var sql = 'INSERT INTO `test1` (`desc`) VALUES ("하하")';\


app.get('/insert', function(req, res) {
  connection.query(sql,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
