import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const RemoteSupportApp = React.lazy(() => import("support_app/SupportApp"));

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Main App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/support">Support (remote)</Link>
        </nav>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<div>Home content</div>} />
            <Route path="/support" element={<RemoteSupportApp />} />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}
