DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT default 0,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id VARCHAR(30),
  manager_id VARCHAR(30) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)
);