import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/Home/Home";
import Solutions from "./components/Solutions/Solutions";
import About from "./components/AboutUs/About";
import Platform from "./components/Platform/Platform";

import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";

const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default App;
