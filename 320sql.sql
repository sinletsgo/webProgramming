
/* 
f9 전체 실행 
ctrl + f9  부분실행( 실행 할곳 드래그 해서 감싸서)
shift + ctrl + f9  현재 쿼리 실행! ( 실행할 코드 중간이던 아무곳에서 포인터 갖다놓고 단축키입력)_
 */


-- *아스타 모든 데이터 조회
select * from news;
-- 데이터 조회 !

select no, title
	from news
	where no = 1
	or title = '갤럭시 s9 출시'; 
	
	
-- insert 조회 할 시, basicsalary 왼쪽 테이블 클릭해서 복사해서 사용. 오타 나면 찾기 힘드니까.

-- 1 member 테이블에서 모든 데이터 조회
select * from member;	

-- 2 basicsalary 테이블에서 모든 데이터 조회
select * from basicsalary;

-- 3 번호가 1004인 사람을 member 테이블에서 조회
select name
	from member
	where no = 1004;

-- 4 과장, 차장의 salary를 basicsalary 테이블에서 조회
select salary
	from basicsalary
	where position = '과장' 
	or position = '차장';

-- 5 position이 사원인 인원을 member 테이블에서 조회 (*사용)
select * from member
	where position = '사원';

-- 6 연차가 10년 이상인 인원을 member 테이블에서 조회

select * from member
	where year >= 10;
	
-- 6-1 position, year 둘다 조회.  (,로 구분)
select position, year from member
	where year >=10;

-- 7 salary 5000 미만인 직급을 basicsalary 테이블에서 조회

select position
	from basicsalary
	where salary <5000;

-- 8 연차가 10년 미만이고 직급이 대리인 인원을 member 테이블에서 조회

select * from member
	where year < 10
	and position = '대리';
	










-- 아래 같은 함수들  구글에 'mysql 현재날짜' 같이 검색하면 다 나옴
select now();  --현재날짜


select count(*) '사원수'            
	from member                -- 테이블명
	where position = '사원';   -- 조건


select * from member --오름차순
order by no;

select * from member
order by no desc;    -- desc 내림차순, 

select * from member
order by year desc, no desc;    -- year, no 둘다 정렬, 내림차순 내림차순 중복 적용해서 보여줌

/*
1. member 테이블에서 사원인 인원 수
2. member 테이블에서 과장인 인원 수
3. member 테이블에서 연차 5년이상 인원 수
4. member 테이블에서 1005 미만 인원 수
5. basicsalary 테이블에서 직급 전체 수
*/
-- 1 
select count(*) '사원수'
	from member
	where position = '사원';
	
-- 2
select count(*) '사원수'
	from member
	where position = '과장';

-- 3 
select count(*) '연차 5년이상 수'
	from member
	where year >= 5;

-- 4
select count(*) '1005미만 인원수'
	from member
	where no < 1005;
	
-- 5  *아닌 column 명 해도 된다.
select count(*) from basicsalary;
select count(position) from basicsalary;

-- 5-2 만약 중복된 직급이 여러개 있으면 distinct 붙여주면 된다
select count(distinct(position)) from member; -- 중복값 제거 후 카운팅


















-- column 추가
alter table `news` add column `category` varchar(50);


update news
	set category = 'IT'
	where no = 1;    -- where 조건 안쓰면 업데이트 다 됨, 실무에서 큰일남
	
	
update news
	set title = '업데이트 실행! '    -- column = 수정할 값
	where no = 1;                    -- 조건
	

/*
1. member 테이블의 각 인원의 연차를 1년씩 증가
2. member 테이블의 이천수 -> 이만수 개명
3. member 테이블의 이철수, 차범근 대리로 승진
4. member 테이블의  지소연 차장으로 승진
5. basicsalary 테이블의  부장, 차장 기본급 1500 상승
6. basicsalary 테이블의  과장, 대리, 사원 기본급 1000 상승
7. basicsalary 테이블의 직급을 사원 - > 주임으로 변경
*/

-- 1 
update member
	set year = year +1 ;

-- 2
update member
	set name = '이만수'
	where no = 1006;
	
-- 3
update member
	set position = '대리'
	where name = '이철수' 
	or name = '차범근';


-- 4
update member
	set position = '차장'
	where name = '지소연';	

-- 5
update basicsalary
	set salary = salary + 1500
	where position = '부장'
	or position = '차장';
-- 6 
update basicsalary
	set salary = salary + 1000
	where position = '과장'
	or position = '대리'
	or position = '사원';

-- 7
update basicsalary
	set position = '주임'
	where position = '사원';

	
	




	
	
	