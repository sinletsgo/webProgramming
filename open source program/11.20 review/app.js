var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);


// 이걸 apl   !  라우터라고 함!


// test?number=1 이라고 브라우저에서 값을 넘겨줘서 (객체의 속성)
// 이곳에서 값을 넘겨받고, 다시 값을 응답한것
// 즉 요청을 보낼 때 같이 전송하는 데이터를 쿼리스트링이라 하고 그의 대한 응답과정

app.get('/test', function(req, res){

  // req 객체 속성들 쫙 보여줌
  // console.log(req);
  // req.query 자체가 객체
  console.log(req.query);

  console.log(req.query.number);
  console.log(req.query.text);
  var arr=["1번째","2번째","3번째","4번째"]
  res.send(arr[req.query.number-1]);
});

  // res 응답은 1번만 보낼 수 있다.
  // 여러개 보내려면 아래와 같이 객체를 만들고 그 안에 담으면 한번에.

  // var all={};
  // all.number=arr[req.query.number]
  // all.text=req.query.text
  // res.send(all)


  // 쿼리스트링으로 두 숫자 입력받아서 합을 응답으로 보내주는 라우터

  app.get('/sum', function(req,res){
    console.log(req.query);
    console.log(req.query.number1);
    console.log(req.query.number2);


    var a=Number(req.query.number1)
    var b=Number(req.query.number2)
    var sum=a+b
    //res.send 로 숫자를 못보냄. +"" 붙이면 문자로 바뀌는데 이렇게 보내면 됨..
    res.send(sum+"")

  });

  app.get('/mul', function(req,res){
    console.log(req.query);
    console.log(req.query.number1);
    console.log(req.query.number2);
    console.log(req.query.number3);
    var a=Number(req.query.number1)
    var b=Number(req.query.number2)
    var c=Number(req.query.number3)
    var mul=a*b*c

    res.send("결과: "+mul)
  });

  app.get('/concatenate', function(req,res){
    console.log(req.query);
    console.log(req.query.word1);
    console.log(req.query.word2);
    console.log(req.query.word3);
    console.log(req.query.word4);
    console.log(req.query.word5);

    var string=""

    a=req.query.word1
    b=req.query.word2
    c=req.query.word3
    d=req.query.word4
    e=req.query.word5
    string=a+b+c+d+e
    console.log(a,b,c,d,e);

    // string=string+req.query.word1
    // string=string+req.query.word2
    // string=string+req.query.word3

    res.send(a+" "+b+" "+c+" "+d+" "+e)
    // res.send(string+" 신성우")
    // res.send(a+b+c+"신성우")

  });

  app.get('/mealPrice', function(req,res){
    res.sendfile("mealPrice.html")
  });


  app.get('/multiple', function(req,res){
    res.sendfile("multiple.html")
  });

  app.get('/concatenatePage', function(req,res){
    res.sendfile("concatenate.html")
  });

  app.get('/getStudentPage', function(req,res){
    res.sendfile("student.html")
  });

  app.get('/getStudents', function(req,res){
    var students= ["오흥미","신성우","김대연","평승현","김장형","홍현우","노명균","김현순","허병일"];
    res.send(students)
  });


  app.get('/getGenderPage', function(req,res){
    res.sendfile("gender.html")
  });


// 내거 라우터
  app.get('/getGender', function(req,res){
    var students= ["오흥미","김현순","신성우","김대연","평승현","김장형","홍현우","노명균","허병일"];
    var gender = ["여","여","남","남","남","남","남","남","남","남","남","남","남"]
    var sendingList = [];
    var Gender=req.query.Gender
    console.log(Gender);

    for(i=0;i<students.length;i++){
        if (Gender==gender[i]) {
          sendingList.push(students[i])
        }
    }
    res.send(sendingList)
  })

 // // 선생님 설명
 //  app.get('/getGender', function(req,res){
 //    var inputGender = req.query.Gender;
 //    var sendingStudentsArray = [];
 //    var students = ["오흥미","신성우","김대연","평승현","김장형","홍현우",
 //    "노명균","김현순","허병일"]
 //    var gender= ["f","m","m","m","m","m","m","f","m"]
 //    for (var i = 0; i < students.length; i++) {
 //      if (inputGender==gender[i]) {
 //        sendingStudentsArray.push(students[i])
 //      }
 //    }
 //    res.send(sendingStudentsArray)
 //  });
