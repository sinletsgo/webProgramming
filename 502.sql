


-- 왜 join? 
-- 현재는 데이터가 별로 없어서 그렇지, 100만건 넘어가면 중복값이 많아 낭비된다.
-- inner join 1 실무에서 축약형 . (+) 해주면 left join 인데, maria db는 안되는듯.
select * from flight a, 
aircraft b
where a.aircraftCode = b.aircraftCode;
	
-- inner join 2
select a.* , b.* from flight a, 
aircraft b
where 1=1
and a.aircraftCode = b.aircraftCode;


-- INNER JOIN 원래 방법
select * from flight a inner JOIN aircraft b
	ON 1=1
	and a.aircraftCode = b.aircraftCode;

	
-- LEFT JOIN
SELECT * FROM flight a LEFT JOIN aircraft b
	ON a.aircraftCode = b.aircraftCode;	
	


-- 기본 조인 형태
-- aircraftCode 기준으로 a,b table INER join 하는데, a.flightName = 'OZ800' 인것만 조회하라!
-- 'OZ800'만 조회하라!
select * from flight a, aircraft b
	where a.aircraftCode = b.aircraftCode
	and a.flightName = 'OZ800';
	

-- 중복된 데이터 있는 table을 갖고 있을 필요가 없다. 
-- filghtName의  seats 만 알면 되니까, INNER join 시키고 data를 가져와서 다른곳에 뿌려주거나 활용하기 위함임.
select a.flightName, b.seats from flight a, aircraft b
	where a.aircraftCode = b.aircraftCode;
	
	
-- 1 관리자인 회원의 ID, NAME만 출력하세요(0 이라는 코드를 쓰면 안됨)
-- id, name을 

select * from auth a, member b; -- 그냥 join만 하면 a, b 순으로 있는만큼 합쳐진다. 

select * from auth a, member b
	where a.authcode = b.authcode; -- a,b table에 authcode가 공통이니까, 공통으로 묶으면 중복이 제거된다
	
select id, name from auth a, member b
	where a.authcode = b.authcode;

select id, name from auth a, member b 
	where a.authcode = b.authcode
	and a.authhority = '관리자';
	
	
-- 2 글제목, 회원이름 두가지만 선택하세요
select a.title, b.name from board a, member b
	where a.id = b.id;


-- 3 권한이 '회원'인 회원이름, 회원ID, 제목, 내용, 권한만 출력하세요(2라는 코드를 쓰면 안됨)
select * from board a, member b, auth c; -- 전체 내용 조회해보기

select * from board a, member b, auth c -- id로 묶어 보기
	where a.id = b.id;
	
select * from board a, member b, auth c
	where a.id = b.id
	and b.authcode = c.authcode;	


select b.name, b.id, a.title, a.content, b.authcode from board a, member b, auth c
	where a.id = b.id
	and b.authcode = c.authcode
	and c.authhority = "회원";




