import './App.css';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product-detail" element={<ProductDetail />} />
              {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
