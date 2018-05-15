


select * from board a, member b, auth c;

select * from board a, member b, auth c -- id로 묶어 보기
	where a.id = b.id;
	
	
-- table 앞 명 따서 붙이는 사람도 있음. 취향
select * from member m, auth a;


-- a, b c 등 앞에 붙이는것 습관, alias 항상 붙이는 습관.
select b.name, b.id, a.title, a.content, c.authhority from board a, member b, auth c
	where a.id = b.id
	and b.authcode = c.authcode
	and c.authhority = "회원";
	
	

-- 멤버테이블 authcode 하나 10으로 만들고 
-- 보드테이블 작성아이디 하나 지우고,
-- 1. 회원이름, 권한 출력 (회원전체)
-- 2. 제목, 작성자이름 출력(글 전체)

-- 1
select m.name, a.authhority from member m LEFT JOIN auth a
	on m.authcode = a.authcode;
	
-- member 송강호 10으로 매칭 안된다. LEFT JOIN 하면 선행인 member table data는 무조건 살린다
	
-- 2
select b.title, m.name from board b LEFT JOIN member m
	on b.id = m.id;
	
	



	
	
start transaction;

delete from member2_copy;


commit;

rollback;