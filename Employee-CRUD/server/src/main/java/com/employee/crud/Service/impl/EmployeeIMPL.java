package com.employee.crud.Service.impl;

import com.employee.crud.Dto.EmployeeDTO;
import com.employee.crud.Dto.LoginDTO;
import com.employee.crud.Entity.Employee;
import com.employee.crud.Repo.EmployeeRepo;
import com.employee.crud.Service.EmployeeService;
import com.employee.crud.payload_response.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;


//    PasswordEncoder passwordEncoder;

    @Override
    public Integer addEmployee(EmployeeDTO employeeDTO) {


        Employee employee = new Employee(
                employeeDTO.getEid(),
                employeeDTO.getFname(),
                employeeDTO.getLname(),
                employeeDTO.getEmail(),
                employeeDTO.getTitle(),
                employeeDTO.getPhoto(),
                employeeDTO.getDno(),
                employeeDTO.getPassword(),
                employeeDTO.getIsadmin()
//                passwordEncoder.encode(employeeDTO.getPassword())
        );

        employeeRepo.save(employee);

        return employee.getEid();
    }

    @Override
    public LoginMessage loginEmployee(LoginDTO loginDTO) {
        Employee emp1 = employeeRepo.findByEmail(loginDTO.getEmail());
        if (emp1 != null) {
            String password = loginDTO.getPassword();
            String truePassword = emp1.getPassword();
            boolean isPwdRight = Objects.equals(password, truePassword);

            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());

                if (employee.isPresent()) {
                    // Check if the employee is an admin before allowing login
                    if (employee.get().isIsadmin()) {
                        return new LoginMessage("Login Success", true);
                    } else {
                        return new LoginMessage("You are not an admin. Login not allowed.", false);
                    }
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Password Not Matched", false);
            }
        } else {
            return new LoginMessage("Invalid Email", false);
        }
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepo.findByIsadminFalse();
    }

    @Override
    public Employee getEmployeeByEid(int eid) {
        return employeeRepo.findByEid(eid);
    }

    @Override
    public Employee getEmployeeByEmail(String email) {
        return employeeRepo.findByEmail(email);
    }

    @Override
    public Integer deleteEmployee(int eid) {
        employeeRepo.deleteByEid(eid);
        return 1;
    }

    @Override
    public Integer updateEmployee(Employee employee) {
        Employee existingEmployee = employeeRepo.findByEmail(employee.getEmail());
        existingEmployee.setEid(employee.getEid());
        existingEmployee.setFname(employee.getFname());
        existingEmployee.setLname(employee.getLname());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setTitle(employee.getTitle());
        existingEmployee.setPhoto(employee.getPhoto());
        existingEmployee.setDno(employee.getDno());
        existingEmployee.setPassword(employee.getPassword());
        employeeRepo.save(existingEmployee);
        return employee.getEid();
    }
}
