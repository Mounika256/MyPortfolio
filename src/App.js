import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./index.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#222]">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
