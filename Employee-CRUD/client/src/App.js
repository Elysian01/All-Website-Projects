import './App.css';
import Login from './pages/Login';
import EmployeeRegister from './pages/EmployeeRegister';
import ListEmployees from './pages/ListEmployees';
import EditEmployee from './pages/EditEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<EmployeeRegister />} />
          <Route path="/list" element={<ListEmployees />} />
          <Route path="/edit" element={<EditEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
