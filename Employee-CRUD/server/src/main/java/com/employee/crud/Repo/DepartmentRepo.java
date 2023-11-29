package com.employee.crud.Repo;

import com.employee.crud.Entity.Department;
import com.employee.crud.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface DepartmentRepo extends JpaRepository<Department, Integer> {
    Optional<Department> findByDeptId(Integer deptId);

}
