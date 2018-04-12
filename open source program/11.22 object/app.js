var express= require("express");
var http = require("http");
var app= express();
var server = http.createServer(app).listen(80);



app.get('/studentObjectArray', function(req, res){


  // 이렇게 할 수도 있지만.. 30번 같이 하는게 편함
  // var Allstudent=[]
  // var student1 = {}
  // student1.name="오흥미";
  // student1.address="서울"
  // student1.number="010-1234-1234"
  // var student2 = {}
  // student2.name="신성우";
  // student2.address="경기"
  // student2.number="010-1234-1234"
  // var student3 = {}
  // student3.name="김대연";
  // student3.address="강원"
  // student3.number="010-1234-1234"
  //
  // Allstudent.push(student1,student2,student3)
  //
  // // res.send(Allstudent);

  var objectArray=[
    {name:"오흥미", address:"서울", phoneNumber:"010-1234-1234", gender:"f"},
    {name:"신성우", address:"경기", phoneNumber:"010-1111-1234", gender:"m"},
    {name:"김대연", address:"강원", phoneNumber:"010-2222-1234", gender:"m"},
    {name:"평승현", address:"충북", phoneNumber:"010-3333-1234", gender:"m"},
    {name:"강장현", address:"충남", phoneNumber:"010-4444-1234", gender:"m"},
    {name:"홍민우", address:"경남", phoneNumber:"010-5555-1234", gender:"m"},
    {name:"노명균", address:"경북", phoneNumber:"010-6666-1234", gender:"m"},
    {name:"김현순", address:"전남", phoneNumber:"010-7777-1234", gender:"f"},
    {name:"허병일", address:"전북", phoneNumber:"010-8888-1234", gender:"m"},
  ];
  res.send(objectArray);
});

app.get('/Array', function(req, res){
  res.sendfile("studentObject.html");
});



// for 문 돌려서 방 안에 객체 여러개 넣어봄
var testArray=[]
app.get('/testArray', function(req, res){
  for (var i = 0; i < 10; i++) {
    testArray.push({name:"나나", number:i, number2:"11"+i
    })
  }
  console.log(testArray);
  res.send(testArray)

});
