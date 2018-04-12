-- 뉴스라는 테이블 생성

CREATE TABLE `news` (
	`no` INT,               
	`title` VARCHAR(50),   -- 50자로 제한하자!
	`desc` LONGTEXT         -- 길이 제한없는!
)


-- 테이블 수정
ALTER TABLE `news` CHANGE COLUMN `title` `title2` VARCHAR(100)


-- 테이블 삭제
DROP TABLE `news`






-- 생성 실습	

CREATE TABLE `member`(
	`no` INT,
	`name` VARCHAR(20),
	`position` VARCHAR(30),
	`year` INT
)

CREATE TABLE `basicsalary`(
	`position` VARCHAR(20),
	`salary` INT
)


-- 수정 실습
ALTER TABLE `member` CHANGE COLUMN `name` `name` VARCHAR(40)

ALTER TABLE `basicsalary` CHANGE COLUMN `position` `position` VARCHAR(30)



ALTER TABLE `basicsalary` CHANGE `position` `position2` VARCHAR(50)
