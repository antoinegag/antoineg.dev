import Link from "next/link";
import React from "react";
import Title from "./Title";
import { ParallaxBanner } from "react-scroll-parallax";
import styles from "../projects.module.css";
import { isIPad13, isMobile } from "react-device-detect";
import classNames from "classnames";

export default function Sara() {
  return (
    <div
      className={classNames(
        "md:flex flex-wrap md:px-12 xl:px-32 md:min-h-screen items-center font-semibold",
        styles.project
      )}
    >
      <div className="md:w-2/3 pb-5 z-10">
        <Title>
          <div className="flex flex-wrap items-center">
            S<span className="text-yellow-500">.</span>A
            <span className="text-yellow-500">.</span>R
            <span className="text-yellow-500">.</span>A
          </div>
          <p className="md:text-3xl">Smart Assistant and Room Automation</p>
        </Title>
        <div className="mb-3 md:text-3xl md:bg-yellow-900 md:py-6 md:px-4">
          <p className="mb-2">
            IoT Room automation system built from the ground up.
          </p>
          <p>
            Handles the lights and tracks light levels, humidity and temperature
          </p>
        </div>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {" "}
          <Link href="/projects/sara">
            <a>Read more</a>
          </Link>
        </div>
      </div>
      {(!isMobile || isIPad13) && (
        <div className="absolute right-6 w-1/2 z-0 flex items-center min-h-screen">
          <div className="w-full">
            <ParallaxBanner
              layers={[
                {
                  image: "/images/desk3.jpg",
                  amount: 0.3,
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
