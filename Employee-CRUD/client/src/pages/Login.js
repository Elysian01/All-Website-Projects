import "./css/main.css";
import "./css/login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            console.log(email, password);
        const response = await axios.post("http://localhost:9000/employee/login", {
            email: email,
            password: password,
        });

            if (response.data.status) {
                dispatch(login());
                // Redirect to the "/list" route on successful login
                navigate('/list');
                console.log("Login successful");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

  return (
    <div className="login">
      <h1 className="login-header">
        <i className="fa-solid fa-code"> </i> Welcome, to <span>Employee CURD</span>{" "}
        <br /> Application
      </h1>
      <br />
      <div className="wrapper">
        <div className="heading">
          <h3>
            <span>Sign In</span> to your account
          </h3>
        </div>

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Employee Email</label>
          <input
            type="text"
            id="email"
            className="input-field"
            placeholder="Enter your employee email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <button onClick={handleLogin}>
            Login <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;