DROP DATABASE IF EXISTS employee;
CREATE DATABASE IF NOT EXISTS employee;
USE employee;

DROP TABLE IF EXISTS employee, department, image;

###ddls###

##USERS
CREATE TABLE employee (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          eid INT,
                          fname VARCHAR(255) NOT NULL,
                          lname VARCHAR(255),
                          email VARCHAR(255) UNIQUE NOT NULL,
                          title VARCHAR(255),
                          photo INT,
                          dno INT,
                          isadmin BOOLEAN DEFAULT false
);


##Department
CREATE TABLE department (
                            dept_id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            capacity INT NOT NULL,
                            current_capacity INT default 0
);

## Image
CREATE TABLE image (
                       id BIGINT PRIMARY KEY AUTO_INCREMENT,
                       name VARCHAR(255),
                       type VARCHAR(255),
                       imagePath VARCHAR(255)
);

###ALTER FKS

ALTER TABLE employee
    ADD CONSTRAINT fk_department
        FOREIGN KEY (dno) REFERENCES department(dept_id);

ALTER TABLE Employee
    ADD CONSTRAINT fk_employee_photo
        FOREIGN KEY (photo) REFERENCES Image(id);

###INSERTS

## Employee Table
INSERT INTO employee (eid, fname, lname, email, title, photo, dno, isadmin)
VALUES
    (101, 'John', 'Doe', 'john.doe@example.com', 'Software Engineer', 53, 1, 1),
    (102, 'Jane', 'Smith', 'jane.smith@example.com', 'QA Engineer', 54, 2, 0),
    (103, 'Bob', 'Johnson', 'bob.johnson@example.com', 'Product Manager', 55, 1, 0),
    (104, 'Alice', 'Williams', 'alice.williams@example.com', 'UI/UX Designer', 56, 2, 0),
    (105, 'Charlie', 'Brown', 'charlie.brown@example.com', 'DevOps Engineer', 57, 1, 0);

## Department table
INSERT INTO department (dept_id, name, capacity, current_capacity)
VALUES
    (1, 'cse', 2, 2),
    (2, 'it', 3, 0),
    (3, 'extc', 2, 1);


## Image Table
INSERT INTO Image (id, imagePath, name, type)
VALUES (53, 'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg',
        'mukesh-ambani.jpg', 'image/jpeg');

