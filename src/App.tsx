import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Onboarding from "./pages/onboarding/onboarding";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
