import "./css/main.css";
import "./css/employee.css";
import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

function EditEmployee() {
    return (
		<div className="register">
			<Link to="/list">
				<h4 className="home"><i className="fa-solid fa-house"></i> Home</h4>
			</Link>
			<br />
			<div className="container">
				<div className="title">
					<p>Modify Employee Details</p>
				</div>

				<EmployeeForm/>

			</div>
    	</div>
  );
}

export default EditEmployee;