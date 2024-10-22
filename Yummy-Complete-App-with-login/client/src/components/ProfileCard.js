function ProfileCard() {
    return (
        <div>
            {/* <div className="row justify-content-center">
                <div className="card col-4" style={{ width: "18rem" }}> */}
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={require("../images/avatar.png")} alt="Admin"
                                className="rounded-circle p-1 bg-warning" width="110" / >
                            <div className="mt-3">
                                <h4>Abhishek Gupta</h4>
                                <p className="text-secondary mb-1">26/C, Opposite of Infosys gate 1. Electronics City Phase 1, Hosur Road Bengaluru - 560100.</p>
                            </div>
                        </div>
                
                        <div className="list-group list-group-flush text-center mt-4">
                            <a href="#" className="list-group-item list-group-item-warning list-group-item-action border-0 active">
                                Profile Informaton
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">Orders</a>
                            <a href="#" className="list-group-item list-group-item-action border-0">Address Book</a>
                            <a href="#" className="list-group-item list-group-item-action border-0">Settings</a>
                            <a href="#" className="list-group-item list-group-item-action border-0">Logout</a>
                        </div>
                    </div>
                {/* </div>
            </div> */}
        <br/><br/><br/>
        </div>
    )
}

export default ProfileCard;