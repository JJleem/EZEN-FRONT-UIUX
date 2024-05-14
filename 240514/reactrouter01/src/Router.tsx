import React from "react";
import { createBrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Route from "./Route";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";
import User from "./User";
import Followers from "./Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
