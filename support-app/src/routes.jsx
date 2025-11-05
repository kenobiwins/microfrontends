import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const SupportAppRoutes = (basePath = "/") => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
  ];

  return useRoutes(routes);
};

export default SupportAppRoutes;
