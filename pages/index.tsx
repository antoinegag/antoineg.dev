import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";

export default function index() {
  return (
    <div className="h-full no-scrollbar">
      <Hero />
      <About />
      <Hero />
    </div>
  );
}
