import React from "react";
import { Unbounded } from "@next/font/google";
import classNames from "classnames";
import styles from "./About.module.css";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function About() {
  return (
    <div
      className={classNames(
        styles.about,
        "h-full mx-auto px-10 lg:px-36 flex flex-col lg:flex-row justify-center items-center lg:space-x-32 space-y-6"
      )}
    >
      <div className="">
        <img src="images/me/outdoor.jpg" />
      </div>
      <div>
        <h2
          className={classNames(
            unbounded.className,
            "lg:text-5xl text-3xl pb-2 text-gray-800"
          )}
        >
          About me
        </h2>
        <div className="text-gray-800 lg:text-3xl">
          <p className="lg:mb-8">
            I&apos;m a <b>Web developer</b> with a focus on <b>front-end</b>{" "}
            developement and great experiences.
          </p>
          <p className="lg:leading-tight">
            I&apos;m always looking to learn and take on new challenges, whether
            it&apos;s through my work or my personal pursuits, exploring new
            trails and <b>pushing myself to be the best I can be</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
