import Link from "next/link";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import Graph from "../../../3D/Graph";
import { Parallax } from "react-scroll-parallax";

export default function CFAnalytics() {
  return (
    <div className="md:flex flex-wrap md:px-12 xl:px-64 md:min-h-screen items-center">
      <div className="md:w-2/3 pb-5">
        <Title>
          <div>
            CF <span className="text-yellow-500">Analytics</span>
          </div>
        </Title>
        <p className="mb-3 md:text-3xl">
          A tool to visualise and analyse your CurseForge analytics export.
        </p>
        <p className="mb-3 md:text-3xl">Privacy focused. Trusted by users.</p>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {" "}
          <Link href="/projects/cfanalytics">
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <div className="hidden md:visible md:flex justify-end xl:justify-center flex-grow">
        <Image
          src="/images/projects/cfanalytics.png"
          width="400"
          height="400"
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
