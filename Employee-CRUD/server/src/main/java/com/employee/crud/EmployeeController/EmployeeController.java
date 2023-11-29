package com.employee.crud.EmployeeController;

import com.employee.crud.Dto.EmployeeDTO;
import com.employee.crud.Dto.LoginDTO;
import com.employee.crud.Entity.Employee;
import com.employee.crud.Service.EmployeeService;
import com.employee.crud.payload_response.LoginMessage;
import com.employee.crud.payload_response.RegisterEmployeeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path="/register")
    public ResponseEntity<?> addEmployee(@RequestBody EmployeeDTO employeeDTO) {
        RegisterEmployeeMessage registerMessage = employeeService.addEmployee(employeeDTO);
        return ResponseEntity.ok(registerMessage);
    }
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/getEmployeeByEid/{eid}")
    public Employee getEmployeeByEid(@PathVariable int eid) {
        return employeeService.getEmployeeByEid(eid);
    }

    @GetMapping("/getEmployeeByEmail/{email}")
    public Employee getEmployeeByEmail(@PathVariable String email) {
        return employeeService.getEmployeeByEmail(email);
    }

    @PutMapping(path="/updateEmployee")
    public Integer updateEmployee(@RequestBody Employee employee) {
        Integer eid = employeeService.updateEmployee(employee);
        return eid;
    }

    @DeleteMapping(path="/deleteEmployee/{eid}")
    public Integer deleteEmployee(@PathVariable int eid) {
        Integer status = employeeService.deleteEmployee(eid);
        return status;
    }

    @PostMapping(path="/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginMessage loginMessage = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }
}
