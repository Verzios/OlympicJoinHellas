import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
