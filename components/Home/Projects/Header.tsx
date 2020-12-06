import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Header() {
  return (
    <div className="flex items-center justify-evenly py-12 overflow-hidden absolute w-full min-h-screen z-50">
      <Parallax y={[175, -175]}>
        <div className="font-bold text-4xl md:text-8xl stroke-yellow">
          PROJECTS
        </div>
      </Parallax>
      <div className="font-bold text-5xl md:text-8xl text-gray-100 stroke-yellow-white-text">
        PROJECTS
      </div>
      <Parallax y={[-175, 175]}>
        <div className="font-bold text-4xl md:text-8xl stroke-yellow">
          PROJECTS
        </div>
      </Parallax>
    </div>
  );
}
