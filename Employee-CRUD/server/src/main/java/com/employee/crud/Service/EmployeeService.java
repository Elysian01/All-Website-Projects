package com.employee.crud.Service;

import com.employee.crud.Dto.EmployeeDTO;
import com.employee.crud.Dto.LoginDTO;
import com.employee.crud.Entity.Employee;
import com.employee.crud.payload_response.LoginMessage;
import com.employee.crud.payload_response.RegisterEmployeeMessage;
import org.springframework.stereotype.Service;

import java.util.List;


//@Service
public interface EmployeeService {
    RegisterEmployeeMessage addEmployee(EmployeeDTO employeeDTO);
    LoginMessage loginEmployee(LoginDTO loginDTO);
    List<Employee> getEmployees();
    Employee getEmployeeByEid(int eid);
    Employee getEmployeeByEmail(String email);
    Integer deleteEmployee(int eid);
    Integer updateEmployee(Employee employee);
}
