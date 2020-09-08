-- The DROP DATABASE statement is used to drop an existing SQL database.
DROP DATABASE IF EXISTS employees;
-- The CREATE DATABASE statement is used to create a new SQL database.
CREATE DATABASE employees;

-- creating a table called department
USE employees;
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)
);

-- creating a table called role
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT default 0,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- creating a table called employee
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);