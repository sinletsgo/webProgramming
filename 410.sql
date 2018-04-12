

/*



1. 회원 중 비밀번호가 가장 긴 회원의 목록
2. 회원 중 권한이 '회원'인 목록
(SELECT * FROM MEMBER2 WHERE AUTHCODE =2 금지, AUTHCODE의 숫자가 
(2) 쿼리에 등장하면 안됨

3.글을 쓴적이 있는 회원의 아이디 목록

*/


-- 1
select * from member
	where length(pass) = (select max(length(pass)) from member);  
	-- 서브쿼리니 () 묶어줌 먼저 () 먼저 계산하고 전체


	
-- 2
select * from member
	where authcode = (select authcode from auth where authhority = '회원');


-- 3 
-- id가 board 테이블에 있으면 글을 쓴 사람이라는거니까.

select * from member
	where id in (select id from board); -- in은 1개가 아닌 여러개 사용시 씀
	-- 1개면 in도 되지만, 코드에 가독성 위해 1개는 = 로 하는게 좋음 







