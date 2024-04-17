import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./Components/ProductAll";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetail";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login />}
          setAuthenticate={setAuthenticate}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
          authenticate={authenticate}
        />
      </Routes>
    </div>
  );
}

export default App;
