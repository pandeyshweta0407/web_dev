CREATE DATABASE IF NOT EXISTS temp1;
DROP DATABASE IF EXISTS temp1;

CREATE DATABASE IF NOT EXISTS temp2;
DROP DATABASE IF EXISTS temp2;

SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO student VALUES(1, "aman" , 26);
INSERT INTO student VALUES(1, "shweta" , 24);

SELECT * FROM student;
SHOW TABLES;
DROP TABLE student;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO student(rollno , name) 
VALUES (1, "aman" ), (2, "sita" ), (3, "geeta" );

INSERT INTO student(rollno , name) VALUES(4, "ansh" );
INSERT INTO student(rollno , name) VALUES(5, "yash" );

INSERT INTO student VALUES(6, "shweta" );
INSERT INTO student VALUES(7, "purima" );

SELECT * FROM student;

DROP TABLE student;
DROP DATABASE IF EXISTS college;


-- Practice QS1
CREATE DATABASE IF NOT EXISTS xyz_company;
use xyz_company;

CREATE TABLE employees(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT NOT NULL
);

INSERT INTO employees
(id , name, salary) VALUES 
(101, "adam" ,25000 ),
(102, "bod" ,30000 ), 
(103, "casey" ,40000 );

SELECT * FROM employees;

DROP DATABASE xyz_company;
 
  
-- constraints
CREATE TABLE temp1(
id INT UNIQUE
);

INSERT INTO student VALUES(6);
INSERT INTO student VALUES(6);

SELECT * FROM temp1;

CREATE TABLE temp2(
id INT PRIMARY KEY
);

CREATE TABLE temp3(
id INT,
name VARCHAR(50), 
age INT,
city VARCHAR(20),
PRIMARY KEY (id, name)
);

CREATE TABLE temp4(
id INT ,
salary INT DEFAULT 25000
);

INSERT INTO temp4(id) VALUES(101);

SELECT * FROM temp4;


-- SAMPLE TABLE
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks , grade , city) VALUES 
(101, "anil" , 78 , "C" , "Pune" ),
(102, "bhumika" , 93 , "A" , "Mumbai" ),
(103, "chetan" , 85 , "B" , "Mumbai" ),
(104, "dhruv" , 96 , "A" , "Delhi" ),
(105, "emanuel" , 12 , "F" , "Delhi" ),
(106, "farah" , 82 , "B" , "Delhi" );


-- select in details
SELECT name , marks FROM student;

SELECT * FROM student;

SELECT DISTINCT city FROM student;

SELECT DISTINCT city as c FROM student;

SELECT * FROM student WHERE marks>80;

SELECT * FROM student WHERE city="Delhi";

SELECT * FROM student WHERE marks+10 >100;

SELECT * FROM student WHERE marks=93;

SELECT * FROM student WHERE marks>93;

SELECT * FROM student WHERE marks>80 AND city="Delhi";

SELECT * FROM student WHERE marks>80 OR city="Delhi";

SELECT * FROM student WHERE marks BETWEEN 80 AND 90;

SELECT * FROM student WHERE  city IN ( "Delhi" , "Mumbai");

SELECT * FROM student WHERE  city NOT IN ( "Delhi" , "Mumbai");

SELECT * FROM student LIMIT 3;

SELECT * FROM student WHERE marks>80 LIMIT 3;

SELECT * FROM student ORDER BY city ASC;

SELECT * FROM student ORDER BY marks DESC LIMIT 3;

SELECT MAX(marks) FROM student;

SELECT MIN(marks) FROM student;

SELECT AVG(marks) FROM student;

SELECT count(rollno) FROM student;

SELECT city FROM student GROUP BY city;

SELECT city , COUNT(rollno) FROM student GROUP BY city;

SELECT city , name ,COUNT(rollno) FROM student GROUP BY city , name;

SELECT city , AVG(rollno) FROM student GROUP BY city;

SELECT city , AVG(marks) FROM student GROUP BY city ORDER BY city;

SELECT city , AVG(marks) FROM student GROUP BY city ORDER BY AVG(marks) DESC;

SELECT grade FROM student GROUP BY grade ORDER BY grade ASC;

SELECT grade, COUNT(rollno) FROM student GROUP BY grade ORDER BY grade ASC;

SELECT city , COUNT(rollno) FROM student GROUP BY city HAVING MAX(marks)>90;

SELECT city FROM student WHERE grade ="A"GROUP BY city HAVING MAX(marks)>=93 ORDER BY  city DESC; 
 
SET SQL_SAFE_UPDATES=0; 
 
UPDATE student SET grade = "0" WHERE grade = "A";  
 
UPDATE student SET marks = 98 WHERE rollno = 105;   

UPDATE student SET grade = "1" WHERE marks>80; 
 
UPDATE student SET grade = "B" WHERE marks BETWEEN 80 AND 90; 
 
UPDATE student SET marks = marks+1;  
 
UPDATE student SET marks=12 WHERE rollno=105;  
DELETE FROM student WHERE marks<33;

SELECT * FROM student;  
 
-- foreign key
CREATE TABLE dept (
id INT PRIMARY KEY,
name VARCHAR(50)
);
 
CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES dept(id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

INSERT INTO dept VALUES(101 ,"english"),(102,"IT");
INSERT INTO teacher VALUES(101 ,"Adam" , 101),(102,"Eve" , 102);

SELECT * FROM dept; 
SELECT * FROM teacher;  
 
UPDATE dept SET id=103 where id=102;
 
-- Alter  Command
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks , grade , city) VALUES 
(101, "anil" , 78 , "C" , "Pune" ),
(102, "bhumika" , 93 , "A" , "Mumbai" ),
(103, "chetan" , 85 , "B" , "Mumbai" ),
(104, "dhruv" , 96 , "A" , "Delhi" ),
(105, "emanuel" , 12 , "F" , "Delhi" ),
(106, "farah" , 82 , "B" , "Delhi" );
  
Alter TABLE student ADD COLUMN age INT; 
Alter TABLE student DROP COLUMN age;  
Alter TABLE student ADD COLUMN age INT NULL DEFAULT 19;
Alter TABLE student MODIFY COLUMN age VARCHAR(2);
Alter TABLE student CHANGE COLUMN age stu_age INT;
Alter TABLE student CHANGE COLUMN age stu_age INT;
Alter TABLE student RENAME stu;
Alter TABLE stu RENAME student;
TRUNCATE TABLE student;

Alter Table student CHANGE COLUMN name fullname VARCHAR(20); 

DELETE from student WHERE marks<80; 

ALTER TABLE student DROP COLUMN grade;

DROP TABLE student;

SELECT * FROM student;  
 
DROP DATABASE college;

-- JOINS
CREATE DATABASE IF NOT EXISTS college;
use college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO student(id, name) VALUES
(101, "adam"),
(102, "bob"),
(103, "casey");

CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);

INSERT INTO course(id, course) VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computerscience");


SELECT * FROM student;
SELECT * FROM course;

SELECT * FROM student INNER JOIN course ON student.id = course.id;

SELECT * FROM student  as s INNER JOIN course as c ON s.id = c.id;

SELECT * FROM student NATURAL JOIN course ;

SELECT * FROM student  as s LEFT JOIN course as c ON s.id = c.id;

SELECT * FROM student  as s RIGHT JOIN course as c ON s.id = c.id;

SELECT * FROM student  as s LEFT JOIN course as c ON s.id = c.id UNION
SELECT * FROM student  as s RIGHT JOIN course as c ON s.id = c.id;

SELECT * FROM student  as s LEFT JOIN course as c ON s.id = c.id WHERE c.id IS NULL;

SELECT * FROM student  as s RIGHT JOIN course as c ON s.id = c.id  WHERE s.id IS NULL;
 
CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
manager_id INT
);

INSERT INTO employee(id, name , manager_id) VALUES
(101, "adam",103),
(102, "bob" , 104),
(103, "casey", NULL),
 (104, "donald" , 103);
 
SELECT * FROM employee;
 
SELECT * FROM employee as a JOIN employee as b ON a.id = b.manager_id;
 
SELECT a.name , b.name FROM employee as a JOIN employee as b ON a.id = b.manager_id;
 
DROP DATABASE college;
 
-- SUB QUERY 
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks , grade , city) VALUES 
(101, "anil" , 78 , "C" , "Pune" ),
(102, "bhumika" , 93 , "A" , "Mumbai" ),
(103, "chetan" , 85 , "B" , "Mumbai" ),
(104, "dhruv" , 96 , "A" , "Delhi" ),
(105, "emanuel" , 12 , "F" , "Delhi" ),
(106, "farah" , 82 , "B" , "Delhi" );
 
 
SElECT name , marks FROM student where marks > (SELECT AVG(marks) FROM student);

SElECT name , rollno FROM student where rollno IN (SELECT rollno  FROM student WHERE rollno % 2=0);

SELECT MAX(marks) FROM (SELECT * from student WHERE city = "DELHI") as temp;

-- same as above
SELECT MAX(marks) FROM student WHERE city = "Mumbai";

SELECT (SELECT MAX(marks) FROM student) , name from student;

-- VIEW
CREATE VIEW view1 AS SELECT rollno , name , marks FROM student;  

SELECT * FROM view1;

SELECT * FROM view1 WHERE marks>90;

DROP VIEW view1;
