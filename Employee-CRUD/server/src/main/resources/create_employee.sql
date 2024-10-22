DROP DATABASE IF EXISTS employee;
CREATE DATABASE IF NOT EXISTS employee;
USE employee;

DROP TABLE IF EXISTS employee, department, image;

-- Employee Table structure
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


-- Department Table Structure
CREATE TABLE department (
                            dept_id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            capacity INT NOT NULL,
                            current_capacity INT default 0
);

-- Image Table Structure
CREATE TABLE image (
                       id BIGINT PRIMARY KEY AUTO_INCREMENT,
                       name VARCHAR(255),
                       type VARCHAR(255),
                       imagePath VARCHAR(255)
);