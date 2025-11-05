import React from "react";

import { Link } from "react-router-dom";
import { useBasePath } from "../basePathContext";

export default function Home() {
  const { basePath, join } = useBasePath();

  return (
    <div style={{ padding: 20 }}>
      <h1>Support — Home</h1>
      <p>
        basePath: <code>{basePath || "(root)"}</code>
      </p>
      <nav>
        <ul>
          <li>
            <Link to={"profile"}>Profile (relative)</Link>
          </li>
          <li>
            <Link to={join("profile")}>Profile (absolute url via join)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
