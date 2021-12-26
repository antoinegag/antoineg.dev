import React from "react";
import Fade from "react-reveal/Fade";
import SoftwareDefCard from "./SoftwareDefCard";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr to-green-50 from-peach-50 via-green-50">
      <div className="p-5">
        <h1 className="flex flex-wrap">
          <div className="whitespace-no-wrap text-green-900 mr-4">
            Building software for
          </div>
          <div className="font-semibold text-green-600">
            <Fade left>Humans.</Fade>
          </div>
        </h1>
        <div className="pb-10 pt-5">
          <SoftwareDefCard />
        </div>
        <p className="mb-3 text-gray-800 font-semibold text-xl">
          <span className="text-peach-500 text-2xl">
            Fullstack Web Developer
          </span>{" "}
          who loves to put{" "}
          <span className="text-peach-500 text-2xl">great software</span> in the
          hands of <span className="text-green-600 text-2xl">great people</span>
          .
        </p>
        <p className="mb-3 font-semibold text-gray-800 text-xl">
          I'm driven by the{" "}
          <span className="text-green-600 text-2xl">impact</span> my work makes
          on <span className="text-green-600 text-2xl">people's life</span> at
          any and every scale, big or small.
        </p>
      </div>
      <div className="w-1/3 px-4 hidden md:block z-50">
        <img
          className="d-none d-md-block rounded-full"
          alt="portrait"
          src="/images/action.jpg"
        />
      </div>
    </div>
  );
}
