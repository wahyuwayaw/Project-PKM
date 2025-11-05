import React from "react"; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<ServiceDetail />} />
        </Route>
        <Route path="*" element={<div style={{padding:32}}>404: Page not found</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
