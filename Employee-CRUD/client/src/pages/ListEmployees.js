import "./css/main.css";
import "./css/employee.css";
import EmployeeCard from "../components/EmployeeCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
// import { Employees } from '../redux/employeeSlice';
import { useSelector } from 'react-redux';
import axios from "axios";

function ListEmployees() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employee.employees);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const employeesResponse = await axios.get("http://localhost:9000/employee/getEmployees");
            const employeesData = employeesResponse.data;

            for (const employee of employeesData) {
                try {
                    if (employee.photo) {
                        const imageResponse = await axios.get(`http://localhost:9000/image/download/${employee.photo}`);
                        employee['imageData'] = imageResponse.data;
                        console.log(employee);
                        dispatch(addEmployee(employee));
                    }
                } catch (imageError) {
                    console.error('Error fetching image data:', imageError);
                }
            }
        } catch (error) {
            console.error('Error fetching employee data:', error);
        }
    };

    fetchData();
}, []);


    return (
        <div className="container" style={{width: "80%"}}>

            <div className="greeting">
                <h1 className="">Welcome, <span>Admin</span>
                <Link to = "/register">
                    <button className="add_emp_btn">Add new Employee</button>
                </Link>
                </h1>
            </div>
            <hr />
    
            <br />

            <h2 className="text-center font-weight-bold">Employee List</h2>
            <br />
            <div className="row justify-content-center">
                
                {employees.map((employee) => (
                    <EmployeeCard key={employee.id} {...employee} />
                ))}
                
            </div>
        </div>
    )
}

export default ListEmployees;