import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupportAppRoutes from "./Routes";

export default function SupportApp() {
  return (
    <BrowserRouter>
      <Routes>
        <SupportAppRoutes />
      </Routes>
    </BrowserRouter>
  );
}
