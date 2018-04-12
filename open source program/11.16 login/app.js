var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);


app.get('/ajaxlogin', function(req, res){
  res.sendfile("ajaxlogin.html");
});

app.get('/queryLogin', function(req, res){

  console.log(req.query.id);
  console.log(req.query.pass);

  if (req.query.id=="polytech" && req.query.pass=="12341234") {
    res.send("로그인 성공")

  } else {

    res.send("로그인 실패")
  }

    // res.send(alert("login 성공!!"))


  // res.send(alert("login 실패!!"));


  // var string =" hello Mr.";
  // string+=req.query.lastName;
  // string+="/your number is";
  // string+="+82"+ req.query.phone;


});


// {}객체
