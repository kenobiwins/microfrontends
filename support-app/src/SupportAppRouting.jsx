import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { BasePathProvider } from "./basePathContext";

export default function SupportAppRouting({ basePath }) {
  const routes = [
    {
      path: "",
      element: (
        <BasePathProvider basePath={basePath}>
          <Outlet />
        </BasePathProvider>
      ),
      children: [
        { path: "/", index: true, element: <Home /> },
        { path: "profile/", element: <Profile /> },
      ],
    },
  ];

  return useRoutes(routes);
}
