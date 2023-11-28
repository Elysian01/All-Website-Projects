package com.employee.crud.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dept_id")
    private Long deptId;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;
}
