USE employees;

INSERT INTO department (departmentName) 
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id);
VALUES ('Sales Manager', 170000, 1),
('Sales Lead', 120000, 1),
('Sales', 110000, 1),
('Engineering Manager', 150000, 2),
('Software Engineer', 100000, 2),
('Engineer', 90000, 2),
('Financial Manager', 140000, 3),
('Financial Analyst', 90000, 3),
('Analyst', 80000, 3),
('Legal Manager', 230000, 4),
('Lawyer', 180000, 4),
('Legal', 170000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Moriah', 'Kincheloe', 1, 1),
('Geovonni', 'Banano', 2, 1),
('Teriah', 'Corleone', 3, 1),
('Rusty', 'Bohnsteil', 3, 1),
('Shayla', 'Griffin', 4, 4),
('Jada', 'Prentiss', 5, 4),
('Elizabeth', 'Rodriguez', 6, 4),
('Craig', 'Ofthecreek', 6, 4),
('Lori', 'Monk', 7, 7),
('Fred', 'Monk', 8, 7),
('Penny', 'Gracey', 9, 7),
('Mitchell', 'Jackson', 9, 7),
('Steven', 'Griffin', 10, 10),
('Leslee', 'Jones', 11, 10),
('Steven', 'Jones', 12, 10),
('Tucky', 'Becker', 12, 10);








