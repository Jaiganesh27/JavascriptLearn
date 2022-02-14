show databases; 
use performancemanager;
show tables;
/* drop tables */ 
drop  table employee; 
drop  table role;
drop  table project;
drop  table project_user_access;
drop  table user;
drop  table user_role;

/*Creating Tables*/ 
CREATE TABLE user (
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) DEFAULT NULL,
last_name VARCHAR(50) DEFAULT NULL,
email VARCHAR(50) DEFAULT NULL,
phone VARCHAR(15) DEFAULT NULL,
password VARCHAR(255) DEFAULT NULL,
is_active TINYINT DEFAULT NULL,
must_change_password TINYINT DEFAULT NULL,
password_last_modify DATETIME DEFAULT NULL,
login_attempt_count INT DEFAULT NULL
);

CREATE TABLE role (
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
role_name VARCHAR(50) DEFAULT NULL,
is_active TINYINT DEFAULT NULL
);

CREATE TABLE user_role (
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
user_id BIGINT DEFAULT NULL, 
role_id BIGINT DEFAULT NULL, 
access_type VARCHAR(50) DEFAULT NULL
);

CREATE TABLE employee (
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
emp_code VARCHAR(50) DEFAULT NULL,
name VARCHAR(50) DEFAULT NULL,
/* need to discuss this field ->  assigned_hours INT DEFAULT NULL, */
designation VARCHAR(50) DEFAULT NULL,
project_id BIGINT DEFAULT NULL
);

CREATE TABLE  project(
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
project_code VARCHAR(50) DEFAULT NULL,
name VARCHAR(50) DEFAULT NULL,
start_date DATETIME DEFAULT NULL,
due_date DATETIME DEFAULT NULL,
description TEXT DEFAULT NULL
);

create TABLE project_user_access(
id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
user_id BIGINT DEFAULT NULL, 
project_id BIGINT DEFAULT NULL
);


/*Adding relationship between tables*/
/*user role relationship*/
ALTER TABLE user_role
ADD FOREIGN KEY(user_id) REFERENCES user(id);
ALTER TABLE user_role
ADD FOREIGN KEY(role_id) REFERENCES role(id);

/*project user relationship*/
ALTER TABLE project_user_access
ADD FOREIGN KEY(user_id) REFERENCES user(id);

ALTER TABLE project_user_access
ADD FOREIGN KEY(project_id) REFERENCES project(id);

/*project employee relationship*/
ALTER TABLE employee
ADD FOREIGN KEY(project_id) REFERENCES project(id);

insert into user(first_name,last_name,email,phone,password,is_active,must_change_password,password_last_modify) 
values('Jai','Ganesh','jai@gmail.com','9876543210','MyUserPasswordJai@12345',1,1,now());
select * from user;

