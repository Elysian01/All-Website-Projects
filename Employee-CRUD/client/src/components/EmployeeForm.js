import { Link } from "react-router-dom";

function EmployeeForm() {
    return (
        <div className="form">
            <div className="user_details">
                <div className="input_box">
                    <label htmlFor="photo">Photo</label>
                    <input type="file" id="photo" accept="image/*" capture="camera" required />
                </div>
                <div className="input_box">
                    <label htmlFor="eid">Employee ID</label>
                    <input type="number" id="eid" placeholder="Enter EID" required />
                </div>
                <div className="input_box">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" required />
                </div>
                <div className="input_box">
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" placeholder="Enter first name" required />
                </div>
                <div className="input_box">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Enter last name" required />
                </div>
                <div className="input_box">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Enter title" required />
                </div>
                <div className="input_box">
                    <label htmlFor="dept">Department</label>
                    <select name="dept" id="dept">
                        <option value="cse">CSE</option>
                        <option value="it">IT</option>
                        <option value="extc">EXTC</option>
                    </select>
                </div>
            </div>
            
            <div className="reg_btn">
                <Link to = "/list">
                    <button className="cancel-btn">Go Back</button>
                </Link>
                <button className="register-btn">Register</button>
            </div>
        </div>
        
    )

}

export default EmployeeForm;