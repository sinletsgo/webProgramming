

-- 3/27

-- 이 4가지가 가장 기본

insert into news (`no`, `title`, `desc`, `category`)
values
(10, '제목', '내용...', '시사');



select `no`, `title`, `desc`, `category`
	from news
where no = 2
	or title like '출시%';


update news set title = '갤럭시 s10출시 ' 
where no =2;



delete from news
where no  = 10;





-- 멤버에서 3명 지우기
delete from member
where name = '박항서'
or name = '지소연'
or name = '차범근';



-- 테이블 명칭 변경
rename table member3 to member2;



create table `member`(
	`no` INT,
	`id` VARCHAR(20),
	`name` VARCHAR(30),
	`pass` VARCHAR(20),
	`email` VARCHAR(30),
	`authcode` INT,
	`regDate` timestamp,
	`lastConnectTime` timestamp
);


create table `board`(
	`no` INT, 
	`id` VARCHAR(20),
	`title`VARCHAR(50),
	`content`LONGTEXT,
	`regDate`timestamp ,
	`lastUpdate` timestamp
);


create table `auth`(
	`authcode` INT,
	`authhoritestty` VARCHAR(20)
);





--alias
select `desc` 내용 from news;  

select * from news a    -- news =  a 
where a.no = 1; -- a. 접근가능


-- 시간표시 
select now();

-- sum, avg
select sum(salary) '연봉총합' from basicsalary;
select avg(salary) '연봉평균' from basicsalary;

-- concat name과 position을 결합해서 보여준다.
select concat(name, ' : ' , position) as '이름직급' from member2;

-- limit 3개만 보고 싶다!
select * from member2 limit 3;  

-- left
select left(name, 1) from member2;
select left(name, 1) as '성', right(name, 2) as '이름' from member2;


-- select substring(문자열, 몇번째부터, 몇개) from table;
select substring(name, 2, 1 ) from member2;
 







-- 데이터 삽입 실습

-- 컬럼 이름들 6개. 다 들어오면 생략해도 된다.
-- insert into `member`( `no`, `id`, `name`, `pass`, `email`, `authcode`)

insert into `member`
values
(1, 'abc111', '김태희', '1234', 'abc111@naver.com', 0, now(), now() ),
(2, 'helloworld', '김코딩', '12345', 'helloworld@naver.com', 1, now(), now()),
(3, 'gidong', '홍길동', '1', 'gildong@daum.net',1, now(), now()),
(4, 'chaboom', '차범근', '1234', 'chaboom@nate.com', 2, now(), now()),
(5, 'polytech', '한가인', 'aaa', 'polytech@polytech.ac.kr', 2, now(), now()),
(6, 'smart', '정우성', 'bbb', 'smart@seoul.kr', 2, now(), now()),
(7, 'hwang1234', '조인성', 'ccc', 'hwang1234@naver.com', 2, now(), now()),
(8, 'qwerasdf', '손예진', '55', 'qwerasdf@hanmail.net', 3, now(), now()),
(9, 'korea0808', '최민식', '1234', 'korea0808@yahoo.co.kr',3, now(), now()),
(10, 'goodid', '송강호', '5656', 'goodid@gamil.com', 3, now(), now())
;


insert into `board`
values
(1, 'abc111', '공지사항', '공지사항입니다', now(), now()),
(2, 'helloworld', '안녕하세요', '잘부탁드립니다', now(), now() ),
(3, 'chaboom', 'test', '게시판 test', now(), now() ),
(4, 'smart', '가입인사', '가입인사드립니다.', now(), now()),
(5, 'hwang1234', 'hello world', 'hello mysql', now(), now() ),
(6,'korea0808','ㅎㅎㅎ','ㅋㅋㅋㅋ', now(), now()) ;


insert into auth
values
(0, '관리자'),
(1, '운영자'),
(2, '회원'),
(3, '예비회원')
;


 
/*
1. member 테이블에서 회원번호가 5 미만인 회원 선택
2. member 테이블에서 authcode가 3인 회원 선택
3. member 테이블에서 회원번호가 7 이하이면서 authcode가 1인 회원 선택
4. board 테이블에서 작성자 id가 chaboom인 글 선택
5. board 테이블에서 번호가 3이하인 글 선택
6. auth 테이블에서 권한이 회원인 데이터 선택
*/

-- 1
select * from member
where no < 5; 


-- 2
select * from member
where authcode = 3; 

-- 3
select * from member
where no <= 7
and authcode = 1;

-- 4
select * from board
where id = 'chaboom';

-- 5
select * from board
where no <= 3 ;

-- 6
select * from auth
where authhority = '회원';


-- 많이 쳐보는게 중요!