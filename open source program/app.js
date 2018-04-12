

// app.js 파일 만든것 주소 복사해서
// cmd 실행 -> cd 마우스우클릭 -> 엔터치고
// (dir 치면 파일은 뭐가 있고 등 나옴)
// node app.js
// npm install express
// npm install http
// 설치 했으면 이제 밑에 require 가능해짐
// 다시 node app.js 실행후
// 구글 검색창에 locallhost:80/test  or 127.0.0.1/test    공통임 자기컴퓨터
// hello world 출력됨
// cmd에서 컨트롤 c 하면 다시 새롭게 시작됨
// 계속 하기 그러니까, npm install supervisor --g  실행후
// supervisor app.js - >소스가 수정되자마자 자동으로 재시작되서 알아서 반영
// (node app.js 는 소스가 수정될때마다 다시 node app.js 해서 재시작해야함)
// 인스톨 한번 했으면 다음부턴 계속 쓸수있는것 같음.


// console.log("hello node");
//
// var array=[]
// for (var i = 0; i < 30; i++) {
//   array[i]=i
// }
// console.log(array);


var express= require("express");
var http = require("http");
var app= express();
// 80포트에서 뭐가 들어오는지 듣고있어!  http는 보통 80포트 씀
// 포트 바꾸면 재시작해서 재가동해줘야 다시 들어갈 수 있음.
// 네이버 포트 뒤에 443? 인가 씀.

var server = http.createServer(app).listen(80);
// 포털사이트 처럼 80번 포트로 들어와서 /test로 들어오는 요청 받으면,
// 아래 send ()응답을 hello world!! 보내는것
// 이건 동기식. 요청 받으면 바로 데이터를 응답해서 보여주니까.
app.get('/test', function(req, res){
  res.send("hello world!!!");
});
// test2로 들어오면 아래를 보내주지.
app.get('/test2', function(req, res){
  res.send("<ol>hello ! node ! yo </ol>");
});
app.get('/testArray', function(req, res){
  var array=[]
  for (var i = 0; i < 30; i++) {
    array[i]=i
  }
  res.send(array);
});



// 이번엔 ajaxTestPage로 요청이 오면 파일을 응답해줌.
// ajax 파일만 일단 가져옴. 데이타를 일단 갖고 있음.
// 그래서 ajax 파일에서 ajax테스트 버튼 클릭해서 나오는건 데이터는 비동기식
app.get('/ajaxTestPage', function(req, res){
  res.sendfile("ajax.html");
});
app.get('/nameNumberPage', function(req, res){
  res.sendfile("ajax2.html");
});


// 크롬 과 다음 동기식으로 주고받음, 다음 댓글 접근은 비동기식!
// 원칙적으로 파일을 받는건 비동기식. 다음 댓글 불러오는건 허용했기에 받아올수있었음
// ajax.html 내 컴퓨터에 있는걸 불러오느냐 vs node서버에서 가져와서 불러오느냐
// 즉 서버에 요청해서 받아온것. 서버를 통해 받은 파일이라 다름
// 내 컴퓨터 있는 파일에서는 ajax 버튼 클릭해도 작동이 안됨. 원칙적으로 비동기식 막혀있기에.






// 쿼리스트링 값넣고
// f12 네트워크 header 에 맨끝 보면 값들 나옴

// 이게 queryString 이라고함
app.get('/queryStringTest', function(req,res){
  // 이미 ajax2 에서 버튼 클릭하면 ajax 함수통해서 lastname과 phone이 입력되었다
  // 그걸 출력하고. string 에서 입력한 문자와 같이 조합되어서 다시 응답 보내는것
  // 즉 데이터 입력된 것이 요청으로 받고, string 문자와 함께 다시 응답하며 보낸것(비동기식)
  // 댓글 다는것과 비슷. ajaxlogin에서 입력해서 서버에 갔다가 오는것임  차이가 큼
  // 밑에 log는 cmd에서 보기위함
  // req.query 는 객체. 기본으로 있음.자동으로 생김
  console.log(req.query.lastName);
  console.log(req.query.phone);
  var string =" hello Mr.";
  string+=req.query.lastName;
  string+="/your number is";
  string+="+82 "+ req.query.phone;

  res.send(string);
})
