-- Alter FK's
ALTER TABLE employee
    ADD CONSTRAINT fk_department
        FOREIGN KEY (dno) REFERENCES department(dept_id);

ALTER TABLE Employee
    ADD CONSTRAINT fk_employee_photo
        FOREIGN KEY (photo) REFERENCES Image(id);