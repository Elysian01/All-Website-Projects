DROP DATABASE IF EXISTS employee;
CREATE DATABASE IF NOT EXISTS employee;
USE employee;

DROP TABLE IF EXISTS employee, department;

###ddls###

##USERS
CREATE TABLE employee (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          eid INT,
                          fname VARCHAR(255) NOT NULL,
                          lname VARCHAR(255),
                          email VARCHAR(255) UNIQUE NOT NULL,
                          title VARCHAR(255),
                          photo VARCHAR(2048),
                          dno INT,
                          isadmin BOOLEAN DEFAULT false
);


##Department
CREATE TABLE department (
                            dept_id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            capacity INT NOT NULL
);


###ALTER FKS

ALTER TABLE employee
    ADD CONSTRAINT fk_department
        FOREIGN KEY (dno) REFERENCES department(dept_id);

###INSERTS

## Employee Table
INSERT INTO employee (eid, fname, lname, email, title, photo, dno, isadmin)
VALUES
    (101, 'John', 'Doe', 'john.doe@example.com', 'Software Engineer', NULL, 1, true),
    (102, 'Jane', 'Smith', 'jane.smith@example.com', 'QA Engineer', NULL, 2, false),
    (103, 'Bob', 'Johnson', 'bob.johnson@example.com', 'Product Manager', NULL, 1, false),
    (104, 'Alice', 'Williams', 'alice.williams@example.com', 'UI/UX Designer', NULL, 2, true),
    (105, 'Charlie', 'Brown', 'charlie.brown@example.com', 'DevOps Engineer', NULL, 1, false);

## Department table
INSERT INTO department (dept_id, name, capacity)
VALUES
    (1, 'cse', 2),
    (2, 'it', 3),
    (3, 'extc', 2);

