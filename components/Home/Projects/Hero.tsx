import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-bl to-green-50 from-peach-50 via-green-50 px-10">
      <div className="2xl:w-2/3 2xl:mx-auto">
        <div className="flex items-center flex-wrap">
          <img src="./images/antslab.png" className="max-h-96" />
          <h1 className="text-gray-800">
            <span className="text-peach">Curiosity</span>{" "}
            <span className="text-gray-600">meets</span>{" "}
            <span className="text-green-600">purpose</span>
          </h1>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="md:text-2xl text-lg md:w-2/3 md:pr-5 w-full pb-5 md:pb-0">
            <p className="mb-2">
              Most of my projects are for fun, to try out new tech, explore new
              fields and learn new stuff.
            </p>
            <p>
              But that doesn't mean it has to stop at that, I love to team up
              with communities and people to build tools and custom experiences.
            </p>
            <a
              href="https://www.polywork.com/ant"
              target="_blank"
              className="text-green-700 underline cursor-pointer"
            >
              My projects and more
            </a>
          </div>
          <div className="md:w-1/3">
            <img src="./images/remote.jpg" className="max-h-96 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
