var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);



// cors 교수님 파일을 내가 받아와서 컴퓨터에 라우터, html 다 있으니 필요는 없지만
// 네이버 증권 내가 직접 요청하면 안되니, 서버 통해서 데이터 가져왔듯이
// 내가 교수님 컴퓨터로 요청해서 교수님이 응답 보내주려면 cors 저게 필요함
// npm install cors 설치해주어야함.
// var cors = require('cors');
// app.use(cors());



app.get('/finanse1', function(req,res){
  res.sendfile("finanse1.html")
});
app.get('/finanse2', function(req,res){
  res.sendfile("finanse2.html")
});
app.get('/finanse3', function(req,res){
  res.sendfile("stockFinal.html")
});

//추가된것
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
//

var request = require('request');




app.get('/orion', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:271560|SERVICE_RECENT_ITEM:271560,001800&_callback=window.__jindo2_callback._2070',
    // url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005930|SERVICE_RECENT_ITEM:005930,271560,001800&_callback=window.__jindo2_callback._4571', //삼성전자
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();

    //이제 convert했으니, 데이터 한글로도 잘 나온다.
    //하지만 텍스트기 때문에, 객체 부분 텍스트만 가져와서 parse 해주어야 객체로 바뀐다.
    //step 1. split로 앞 필요없는 텍스트 자른다.
    //step 2. 잘렸기에, 빈배열 0, 나머지 데이터는 1번 배열로 나뉘었다. 1번배열을 주목한다.
    //step 3. 1번 배열 객체텍스트의 마지막 ) 괄호를 없애기 위해서 dataSplit 1번 배열에서 slice(복사 붙여넣기) 한다
    //step 4. parse 시켜서 객체로 만든다!


    var dataSplit
    var dataParse

    var dataTest
    console.log(data.split("window.__jindo2_callback._2070("));

    dataSplit= data.split("window.__jindo2_callback._2070(") //오리온
    // dataSplit= data.split("window.__jindo2_callback._4571(") //삼성전자
    dataParse= dataSplit[1].slice(0, dataSplit[1].length-1 )
    dataParse= dataSplit[1].slice(0, -1 ) //이렇게 해도됨


    //더 간단히 하려면 이렇게 객체 부분만 정확히 복사하면 된다
    dataTest=data.slice(31,-1)
    // res.send(data);

    // res.send(dataParse);
    // res.send();
    // console.log(JSON.parse(dataSlice));
    // res.send(JSON.parse(dataParse));
    // res.send(JSON.parse(dataTest));
    res.send(JSON.parse(dataTest));

  }
)
});


app.get('/orion2', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:271560|SERVICE_RECENT_ITEM:271560,001800&_callback=window.__jindo2_callback._2070',
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();
    var dataTest
    dataTest=data.slice(31,-1)
    res.send(JSON.parse(dataTest));
  }
)
});

app.get('/samsung', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005930|SERVICE_RECENT_ITEM:005930,271560,001800&_callback=window.__jindo2_callback._4571',
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();
    var dataTest
    dataTest=data.slice(31,-1)
    res.send(JSON.parse(dataTest));
  }
)
});
app.get('/lg', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:066570|SERVICE_RECENT_ITEM:066570,271560,005930,001800&_callback=window.__jindo2_callback._8087',
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();
    var dataTest
    dataTest=data.slice(31,-1)
    res.send(JSON.parse(dataTest));
  }
)
});
app.get('/skhi', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:000660|SERVICE_RECENT_ITEM:000660,068270,036490,066570,271560,005930,001800&_callback=window.__jindo2_callback._7195',
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();
    var dataTest
    dataTest=data.slice(31,-1)
    res.send(JSON.parse(dataTest));
  }
)
});
app.get('/cell', function(req, res){

  request({
    url:'http://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:068270|SERVICE_RECENT_ITEM:068270,036490,066570,271560,005930,001800&_callback=window.__jindo2_callback._4991',
    headers: {
      'content-Type': 'content=text/html; charset-euc-kr'
    },
    method:'GET',
    encoding: null,
  }, function(error, response, body){
    data = iconv.convert(body).toString();
    var dataTest
    dataTest=data.slice(31,-1)
    res.send(JSON.parse(dataTest));
  }
)
});
