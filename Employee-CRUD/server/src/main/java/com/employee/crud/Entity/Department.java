package com.employee.crud.Entity;

import jakarta.persistence.*;


@Entity
@Table(name="department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dept_id")
    private Integer deptId;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "current_capacity")
    private Integer current_capacity;

    public Department(Integer deptId, String name, Integer capacity, Integer current_capacity) {
        this.deptId = deptId;
        this.name = name;
        this.capacity = capacity;
        this.current_capacity = current_capacity;
    }

    public Department() {
    }

    public Integer getDeptId() {
        return deptId;
    }

    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getCurrentCapacity() {
        return current_capacity;
    }

    public void setCurrentCapacity(Integer current_capacity) {
        this.current_capacity = current_capacity;
    }
}
