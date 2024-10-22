-- Employee Table
INSERT INTO employee (eid, fname, lname, email, title, photo, dno, isadmin)
VALUES
    (101, 'John', 'Doe', 'john.doe@example.com', 'Software Engineer', 53, 1, 1),
    (102, 'Jane', 'Smith', 'jane.smith@example.com', 'QA Engineer', 54, 2, 0),
    (103, 'Bob', 'Johnson', 'bob.johnson@example.com', 'Product Manager', 55, 1, 0),
    (104, 'Alice', 'Williams', 'alice.williams@example.com', 'UI/UX Designer', 56, 2, 0),
    (105, 'Charlie', 'Brown', 'charlie.brown@example.com', 'DevOps Engineer', 57, 1, 0);

-- Department table
INSERT INTO department (dept_id, name, capacity, current_capacity)
VALUES
    (1, 'cse', 2, 2),
    (2, 'it', 3, 0),
    (3, 'extc', 2, 1);


-- Image Table
INSERT INTO Image (id, imagePath, name, type)
VALUES (53, 'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg',
        'mukesh-ambani.jpg', 'image/jpeg');