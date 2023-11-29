import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import EmployeeRegister from './pages/EmployeeRegister';
import ListEmployees from './pages/ListEmployees';
import EditEmployee from './pages/EditEmployee';
import { IsAuthenticated } from './redux/authSlice';

const App = () => {
   const isAuthenticated = useSelector(IsAuthenticated);

  return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/list" element={<ListEmployees />} />
          <Route path="/register" element={<EmployeeRegister />} />
          <Route path="/edit" element={<EditEmployee />} /> */}
          
            {/* Protected Route - Only accessible if authenticated */}
            <Route
              path="/list"
              element={isAuthenticated ? <ListEmployees /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={isAuthenticated ? <EmployeeRegister /> : <Navigate to="/" />}
            />
            <Route
              path="/edit"
              element={isAuthenticated ? <EditEmployee /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
