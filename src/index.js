import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import ResultContextProvider from "./components/contexts/ResultContextProvider";

createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
