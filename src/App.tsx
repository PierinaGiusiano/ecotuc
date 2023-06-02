import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/app-layout/app-layout";
import Home from "./pages/home/home";
import Onboarding from "./pages/onboarding/onboarding";
import EcoPuntos from "./pages/eco-puntos/eco-puntos";
import Informacion from "./pages/informacion/informacion";

import "./styles/general.scss";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/ecopuntos" element={<EcoPuntos />} />
        <Route path="/informacion" element={<Informacion/>} />
      </Routes>
    </AppLayout>
  );
}

export default App;
 