import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";

const PriviteRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PriviteRoute;
