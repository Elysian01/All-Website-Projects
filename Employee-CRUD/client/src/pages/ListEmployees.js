import "./css/main.css";
import "./css/employee.css";
import EmployeeCard from "../components/EmployeeCard";
import { Link } from "react-router-dom";

function ListEmployees() {
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
                <EmployeeCard/>
                <EmployeeCard/>
            </div>
        </div>
    )
}

export default ListEmployees;