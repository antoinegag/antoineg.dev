import React from "react";
import About from "./About";

import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
