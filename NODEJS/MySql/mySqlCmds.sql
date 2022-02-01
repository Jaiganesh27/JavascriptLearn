create database student;
show databases;
use student;
create table studentdata(
stuId int not null auto_increment,
stuName varchar(30) not null,
stuClass  int(10) not null,
stuRollNo int(8)  not null ,
stuClassTeacher varchar(50) not null,
primary key(stuId)
);
drop table studentdata;

describe studentdata;
alter table studentdata modify stuName varchar(35) not null;  
alter table studentdata modify stuRollNo int not null;
alter table studentdata add stuSec char(1) not null; 
alter table studentdata add stuGender char(1) not null;

create table classteacher(
 ctId int not null auto_increment,
 ctName varchar(30) not null,
 ctNumber int(10) not null,
 ctsubject varchar(10) not null,
 primary key(ctId),
 constraint classT foreign key (ctId) references studentdata(stuId)
);

describe classteacher;
alter table classteacher modify ctsubject varchar(20) not null;

insert into studentdata(stuName,stuClass,stuRollNo,stuClassTeacher,stuSec,stuGender) values
('Rakesh',10,10001,'Ramu','A','G');
select * from studentdata;
insert into studentdata(stuName,stuClass,stuRollNo,stuClassTeacher,stuSec,stuGender) values
('Ganesh',9,9001,'Thenmozhi','B','G'),('Kumar',11,11001,'Shama','B','G'),('Jeeva',10,10002,'Pias','A','G'),
('Divya',9,9002,'Thenmozhi','B','F'),('Ragini',11,11002,'Shama','A','F'),('Daniel',10,10003,'Pias','A','G'),
('Jai',9,9003,'Thenmozhi','b','G'),('Shruthi',11,11003,'Shama','C','f'),('Praveen',10,10004,'Pias','A','G');
alter table studentdata modify stuRollNo int(8) not null unique;

delete from studentdata where stuId = 8;
insert into studentdata(stuId,stuName,stuClass,stuRollNo,stuClassTeacher,stuSec,stuGender) values
(9,'Venky',10,10008,'Ramu','A','G'),(8,'Yuva',10,10006,'Ramu','A','F');

insert into studentdata(stuName,stuClass,stuRollNo,stuClassTeacher,stuSec,stuGender) values
('Jai',10,10009,'Ramu','A','G');


select * from studentdata where stuClass =10 or stuGender = 'G';
select * from studentdata where stuClass =10 and stuGender = 'G';
select * from studentdata where stuClass =10 and stuGender = 'G' order by stuName;
select * from studentdata where stuClass =10 and stuGender = 'G' order by stuName desc; 
describe classteacher;
insert into classteacher(ctName,ctNumber,ctsubject) values('Thenmozhi',9999966666,'English');
alter table classteacher modify ctNumber Bigint(10) not null; 
select * from classteacher;
select stuName,stuClass,stusec from studentdata;

update studentdata set stuName = 'Jaiganesh' where stuId = 11;

select * from studentdata;

select * from studentfruitstable1data where stuGender ='F' limit 5;
select * from studentdata where stuClass=10 order by stuName desc;
insert into classteacher(ctName,ctNumber,ctsubject) values('Venkat',9999966668,'Tamil');
select  studentdata.stuName, studentdata.stuClass,studentdata.stuSec,classteacher.ctName from studentdata 
inner join classteacher on (studentdata.stuId = classteacher.ctId) ;
select  studentdata.stuName, studentdata.stuClass,studentdata.stuSec,classteacher.ctName from studentdata 
left join classteacher on (studentdata.stuId = classteacher.ctId) ;
select  studentdata.stuName, studentdata.stuClass,studentdata.stuSec,classteacher.ctName from studentdata 
right join classteacher on (studentdata.stuId = classteacher.ctId) and classteacher.ctName = 'Venkat' ;


select min(stuClass) from studentdata;
select max(stuClass) from studentdata;
select avg(stuClass) from studentdata;
select round(avg(stuClass),2) from studentdata;
select sum(stuClass) from studentdata;
select stuGender,Count(stuId) from studentdata;
select stuGender,Count(stuId) from studentdata group by stuGender;

select stuName from studentdata where stuName like '%a';
select stuName from studentdata where stuName like 'a%';
select stuName from studentdata where stuName like 'Ra%';
select stuName from studentdata where stuName like 'J_eva';
select stuName from studentdata where stuName not like 'J_eva';
select stuName,stuClassTeacher from studentdata where stuClassTeacher in ('Thenmozhi','Pias');
select stuName,stuClassTeacher from studentdata where stuClassTeacher not in ('Thenmozhi','Pias');
select stuClassTeacher,count(stuClassTeacher) as HandlingStudents from studentdata group by stuClassTeacher;

select * from studentdata limit 5;
select * from studentdata  where stuClass between  9 and 11;
select distinct stuGender, count(stuGender)as Students from studentdata group by stuGender;
delete from classteacher where id= 1; 
select* from classteacher;
delete from classteacher where ctId= 1;
truncate table classteacher;
drop table classteacher;
show tables; 
select * from classteacher;
select * from studentdata where stuClass > 9 and stuClass < 11;
select stuName,stuClass from studentdata where stuClass >9 and stuClass < 11 order by stuName desc;
update studentdata set stuName =  'Rajesh' where stuName = 'Rakesh' and stuId =1;
drop database student;
