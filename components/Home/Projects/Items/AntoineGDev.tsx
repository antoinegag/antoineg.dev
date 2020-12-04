import Link from "next/link";
import React from "react";
import Title from "./Title";
import Pyramid from "../../../3D/Pyramid";
import { isIPad13, isMobile } from "react-device-detect";
import { Parallax } from "react-scroll-parallax";

export default function AntoineGDev() {
  return (
    <div className="flex flex-wrap md:min-h-screen">
      <div className="md:flex flex-wrap items-center md:px-12 xl:px-64">
        <div className="md:w-2/3 pb-5">
          <Title>
            antoineg<span className="text-yellow-500">.dev</span>
          </Title>
          <div></div>
          <div className="mb-6 md:text-3xl">
            Blazing fast statically generated site using React, NextJS,
            TailwindCSS 2.0, React Three Fiber and more.
          </div>
          <div className="yellow-wavy md:text-xl cursor-pointer">
            {" "}
            <Link href="/projects/antoineg.dev">
              <a>Read more</a>
            </Link>
          </div>
        </div>
        <div className="md:text-4xl md:w-1/3 md:text-right pb-5"></div>
      </div>
      {(!isMobile || isIPad13) && (
        <div className="absolute md:min-h-screen md:w-1/2 md:right-0">
          <div>
            <Pyramid className="md:min-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
}
