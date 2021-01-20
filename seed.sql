--DEPARTMENTS--
INSERT INTO department(name)
VALUES ("Server");

INSERT INTO department(name)
VALUES ("Busser");

INSERT INTO department(name)
VALUES ("Hostess");

INSERT INTO department(name)
VALUES ("Bartender");

--ROLES--
INSERT INTO role (title, salary, department_id)
VALUES ("Head Wait", 10, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Waiter", 2.13, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Server Training", 7.25, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Barback", 20, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Busser", 15, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Board Runner", 15, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Hostess", 15, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Bartender", 10, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Service Well", 15, 4);

--EMPLOYEES--
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Marshall", "Bertschy", 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sky", "Dando", 1, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Christian", "Dago", 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("David", "Rodriguez", 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Manuel", "Gusman", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Renee", "Davids", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Karina", "Guerra", 6, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Summer", "Web", 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Lindsey", 8, 3);