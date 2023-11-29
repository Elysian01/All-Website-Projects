import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteEmployee } from "../redux/employeeSlice";
import axios from "axios";

function EmployeeCard(props) {

    const dispatch = useDispatch();

    var dept_name = "None";
    if (props.dno === 1) {
        dept_name = "CSE";
    } else if (props.dno === 2) {
        dept_name = "IT";
    } else {
        dept_name = "EXTC";
    }

    const deleteEmployeeClicked = async () => {
        try {
                const response = await axios.delete(`http://localhost:9000/employee/deleteEmployee/${props.eid}`, );
                // console.log(response.status);

                if (response.status === 200) {
                    console.log("Employee deleted: ", response);
                    dispatch(deleteEmployee(props.email));
                    // alert('Employee Added Successfully!!');
                } else {
                        console.log("Employee Can't be deleted")
                        console.log("Response", response);
                }
            } catch (error) {
                console.log("An error occurred. Please try again later.");
            }

        
    };

    return (
        
        <div className="col-md-4">
                <div className="card mb-3">
                <img className="card-img-top employee-img" src={`data:image/jpeg;base64,${props.imageData}`} alt="employee pic"/>
                    <div className="card-body">
                    <h5 className="card-title">{ props.fname + " " + props.lname}</h5>
                        <p className="card-text">{props.title} <span className="card-dept">{dept_name}</span></p>
                    </div>

                    <div className="card-btns">
                        <Link to="/edit" state={props}>
                            <button className="edit-btn">Edit/View Details</button>
                        </Link>
                    <button onClick={ deleteEmployeeClicked } className="delete-btn"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
    )

}

export default EmployeeCard;