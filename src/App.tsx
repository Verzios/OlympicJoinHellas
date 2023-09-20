import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home";
import Elasmatikes from "./pages/Elasmatikes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="elasmatourgikes" element={<Elasmatikes />} />
    </Routes>
  );
}

export default App;
