import React from "react";
import { Unbounded } from "@next/font/google";
import classNames from "classnames";
import Image from "../Image";
import styles from "./About.module.css";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function About() {
  return (
    <div
      className={classNames(
        styles.about,
        "h-full bg-black mx-auto py-10 px-10 flex justify-center items-center"
      )}
    >
      <div className="max-w-2xl">
        <h2 className={classNames(unbounded.className, "text-4xl pb-2")}>
          About me
        </h2>
        <div className="text-gray-100">
          <p>
            <b>Web developer</b> with a focus on <b>front-end</b>. You can find
            me cycling or hiking in the great outdoors the minute I close my
            laptop.
          </p>
          <p>
            I&apos;m always looking to learn and take on new challenges, whether
            it&apos;s through my work or my personal pursuits, exploring new
            trails and <b>pushing myself to be the best I can be</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
