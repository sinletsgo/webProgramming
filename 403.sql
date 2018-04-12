/*
7. board 테이블에서 모든 글을 번호 오름차순으로 선택
8. board 테이블에서 모든 글을 번호 내림차순으로 선택
9. board 테이블에서 모든 글을 번호 오름차순, 작성일시 내림차순으로 선택
10. board 테이블에서 모든 글을 번호 내림차순, 작성일시 오름차순으로
11 member테이블에서 authcode가 2,3인 사람의 수
12. member 테이블에서 no가 1이상 7미만인 사람 중 authcode가 2인 사람의 수
13. member 테이블에서 성만 가져오기
14. borad테이블에서 '제목:내용'을 '본문'이라는 컬럼명으로 가져오기
15. member 테이블에서 이름만 가져오기\

*/


-- 7
select * from board order by no;

-- 8
select * from board order by no desc;

-- 9 
select * from board order by no, regDate desc;

-- 10 
select * from board order by no desc, regDate;

-- 11
select count(*) as '2, 3인 사람' from member 
	where authcode = 2 or authcode =  3 ;

-- 12
select count(*) from member 
	where no >=1 and no < 7 
	and authcode = 2;

-- 13
select left(name,1) from member;


-- 14 
select concat(title, " : ", content) '본문' 
	from board; 

-- 15 
select right(name,2) from member;





/*
1. member 테이블에서 김태희 이름을 김태리로 이름 변경

2. member 테이블에서 조인성 email을 insung @ naver.com으로 변경

3. member 테이블에서 손예진, 최민식 authcode 를 2로 변경

4. board 테이블에서 5번 글의 내용을 hello mariadb로 변경

5. auth 테이블에서 authhority 컬럼값의 예비회원을 승인대기로 변경

*/
-- 1
update member
	set name = '김태리'
	where name = '김태희';

-- 2

update member
	set email = 'insung @ naver.com'
	where name = '조인성';
	
-- 3

update member 
	set authcode = '2'
	where name = '손예진' or  name = '최민식';
	
-- 4 
update board 
	set content = 'hello mariadb'
	where no = '5';

-- 5
update auth
	set authhority = '승인대기'
	where authhority = '예비회원';


select * from auth;




-- 



-- 롤백하면 취소 되는것  트랜잭션
start transaction
delete from member_copy;
commit
rollback







-- where 에서 () 안에 넣어주면 먼저 계산. 


select position from basicsalary;

select max(salary) from basicsalary;

-- 가장 높은 연봉인 직급을 가져오라
select position from basicsalary
	where salary = (select max(salary) from basicsalary);
	
	
	
	



--  or 하지않아도 in 으로한꺼번에 가능
select * from member2
	where position in ('사원', '과장', '부장');
	


-- 연봉이 7000이상  사장,부장,차장,과장
select * from basicsalary where salary >= 7000;

-- basicsalary에서 연봉이 7000이상은  사장,부장,차장,과장이다!

-- 해당 조건 직급에 해당하는 직급 과 인원들 조회!
select position from member2
	where position in (
	select position from basicsalary where salary >= 7000
	);
	
select * from member2
	where position in  (
	select position from basicsalary where salary >= 7000
	);
	
	
	
















