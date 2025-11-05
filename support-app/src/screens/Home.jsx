import React from "react";
import { Link } from "react-router-dom";

export default function Home({ children }) {
  return (
    <div>
      <h2>Support Home</h2>
      <Link to={"/support/profile"}>profile</Link>
      <Link to={"/support"}>home</Link>
      {children}
    </div>
  );
}
