import React from "react";

import { Link } from "react-router-dom";
import { useBasePath } from "../basePathContext";

export default function Profile() {
  const { basePath, join } = useBasePath();

  return (
    <div style={{ padding: 20 }}>
      <h1>Support — Profile</h1>
      <p>
        basePath: <code>{basePath || "(root)"}</code>
      </p>
      <Link to={"/"}>Back home (relative)</Link>
      <br />
      <Link to={join("/")}>Back home (absolute)</Link>
    </div>
  );
}


