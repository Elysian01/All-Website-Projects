import { Link } from "react-router-dom";

function EmployeeCard() {
    return (
        
        <div className="col-md-4">
                <div className="card mb-3">
                    <img className="card-img-top employee-img" src= {require("../imgs/ratan-tata.jpeg")} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Abhishek Gupta</h5>
                        <p className="card-text">Senior Software Developer <span className="card-dept">CSE</span></p>
                    </div>

                <Link to="/edit">
                    <button className="edit-btn">Edit/View Details</button>
                </Link>
                </div>
            </div>
    )

}

export default EmployeeCard;