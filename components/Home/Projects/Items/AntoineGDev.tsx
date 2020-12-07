import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function AntoineGDev() {
  return (
    <div className="xl:pl-24 w-full xl:w-2/3 font-semibold">
      <div className="bg-white text-gray-900 p-12 lg:bg-opacity-90">
        <Title className="z-40">
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
    </div>
  );
}
