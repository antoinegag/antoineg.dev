import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";

export default function index() {
  return (
    <div className="h-full no-scrollbar">
      <Hero />
      <About />
      <Projects />
      <div className="min-h-screen bg-gray-800">Noise</div>
    </div>
  );
}
