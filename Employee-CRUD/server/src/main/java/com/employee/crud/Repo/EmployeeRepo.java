package com.employee.crud.Repo;

import com.employee.crud.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

    Optional<Employee> findOneByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);

    List<Employee> findByIsadminFalse();

    Employee findByEid(int eid);

    @Transactional
    void deleteByEid(Integer eid);
}
