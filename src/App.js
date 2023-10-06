import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certification from "./pages/Certification";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Interest from "./pages/RecentProjects";
import Skills from "./pages/Skills";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/certification" element={<Certification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
