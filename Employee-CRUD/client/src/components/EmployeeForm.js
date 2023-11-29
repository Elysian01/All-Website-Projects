import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee } from '../redux/employeeSlice';

function EmployeeForm(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const modifyDetailsForm = props.modifyDetailsForm;

    const [formValues, setFormValues] = useState({
        photo: modifyDetailsForm ? props.employeeData.photo : "",
        imageData: modifyDetailsForm ? props.employeeData.imageData: "",
        eid: modifyDetailsForm ? props.employeeData.eid : "",
        email: modifyDetailsForm ? props.employeeData.email : "",
        fname: modifyDetailsForm ? props.employeeData.fname : "",
        lname: modifyDetailsForm ? props.employeeData.lname : "",
        title: modifyDetailsForm ? props.employeeData.title : "",
        dno: modifyDetailsForm ? props.employeeData.dno : "1", 
        password: "toor",
        isadmin: 0
   });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    };

    const handleUpload = async (e) => {
       
        const file = e.target.files[0];
    
        if (file) {
            const Data = new FormData();
            Data.append('productImage', file);

            try {
                const imageResponse = await axios.post('http://localhost:9000/image/upload', Data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                });

                console.log('Image uploaded:', imageResponse.data);

                var fetchedImageData;
                if (imageResponse.data) {
                    const imageDataResponse = await axios.get(`http://localhost:9000/image/download/${imageResponse.data}`);
                    fetchedImageData= imageDataResponse.data;
                }
                // Assuming the response structure includes an 'id' property
                if (imageResponse.data) {
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        'photo': imageResponse.data,
                        'imageData': fetchedImageData
                    }));
                } else {
                    console.error('Invalid response structure:', imageResponse);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            console.warn('No file selected for upload.');
        }
    }

    const RegisterBtnClicked = async () => {
        try {
            var formData = {};
            formData['photo'] = formValues.photo;
            formData['eid'] = formValues.eid;
            formData['email'] = formValues.email;
            formData['fname'] = formValues.fname;
            formData['lname'] = formValues.lname;
            formData['title'] = formValues.title;
            formData["password"] = formValues.password;
            formData['dno'] = parseInt(formValues.dno);
            formData['isadmin'] = 0;
            formData['imageData'] = 

            console.log(formData);
            var response
            if (modifyDetailsForm) {
                response = await axios.put('http://localhost:9000/employee/updateEmployee', formData);
            }
            else {
                response = await axios.post('http://localhost:9000/employee/register', formData);
            }
            
            const message = response.data.message;
            if (response.status === 200) {
                // Redirect to the "/list" route on successful login
                if (modifyDetailsForm) {
                    alert("Employee Details Updated Successfully!!");
                    formData['imageData'] = formValues.imageData;
                    console.log("After Submission: ", formData);
                    dispatch(updateEmployee(formData));
                } else {
                    // dispatch(addEmployee(formData));
                    // alert('Employee Added Successfully!!');
                    alert(message);
                }
                navigate('/list');
            } else {
                alert(message);
                console.log("Employee Can't be added successfully")
                console.log("Response", response);
            }
        } catch (error) {
                console.log("An error occurred. Please try again later.");
        }

        
    };


  return (
    <div className="form">
      <div className="user_details">
        <div className="input_box">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            capture="camera"
            onChange={handleUpload}
            // required
          />
        </div>
        <div className="input_box">
          <label htmlFor="eid">Employee ID</label>
          <input
            type="number"
            id="eid"
            name="eid"
            value={formValues.eid}
            placeholder="Enter EID"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            placeholder="Enter email"
            onChange={handleInputChange}
            disabled = {modifyDetailsForm}
            required/>
        </div>
        
        <div className="input_box">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            placeholder="Enter title"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input_box">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formValues.fname}
            placeholder="Enter first name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input_box">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formValues.lname}
            placeholder="Enter last name"
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="input_box">
          <label htmlFor="dno">Department</label>
          <select
            name="dno"
            id="dno"
            value={formValues.dno}
            onChange={handleInputChange}
          >
            <option onChange={handleInputChange} value="1">CSE</option>
            <option onChange={handleInputChange} value="2">IT</option>
            <option onChange={handleInputChange} value="3">EXTC</option>
          </select>
        </div>
      </div>

      <div className="reg_btn">
        <Link to="/list">
          <button className="cancel-btn">Go Back</button>
        </Link>
        <button className="register-btn" onClick={RegisterBtnClicked}>
          {modifyDetailsForm ? "Update" : "Register"}
        </button>
      </div>
    </div>
  );
}

export default EmployeeForm;