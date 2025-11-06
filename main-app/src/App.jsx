import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";

const SupportAppRoutes = React.lazy(() => import("support_app/SupportAppRouting"));

function Home() {
  return (
    <div className="p-4">
      <h1>Main app home</h1>
      <ProfileForm />
    </div>
  );
}

function NotFound() {
  return <div className="p-4">Not found</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 p-4">
        <header className="mb-4">
          <nav className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
          </nav>
        </header>

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/support/*"
                element={
                  <Suspense fallback={<div>Loading support...</div>}>
                    <SupportAppRoutes basePath="/support" />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
