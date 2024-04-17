import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductDetail from "./Components/ProductDetail";
import LoginPage from "./Components/LoginPage";
import UserPage from "./Components/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:device/:category/:productnum"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
