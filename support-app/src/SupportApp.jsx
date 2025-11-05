import React from "react";
import { BrowserRouter } from "react-router-dom";
import SupportAppRouting from "./SupportAppRouting";

export default function SupportApp() {
  return (
    <BrowserRouter>
      <SupportAppRouting />
    </BrowserRouter>
  );
}
