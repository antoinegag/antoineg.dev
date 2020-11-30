import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Header() {
  return (
    <div className="flex items-center justify-evenly py-12 md:py-32 bg-gray-800 overflow-hidden">
      <Parallax y={[175, -175]}>
        <div className="font-bold text-2xl md:text-8xl stroke-yellow">
          PROJECTS
        </div>
      </Parallax>
      <div className="font-bold text-2xl md:text-8xl text-gray-100">
        PROJECTS
      </div>
      <Parallax y={[-175, 175]}>
        <div className="font-bold text-2xl md:text-8xl stroke-yellow">
          PROJECTS
        </div>
      </Parallax>
    </div>
  );
}
