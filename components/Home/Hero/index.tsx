import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { Parallax } from "react-scroll-parallax";
import { isIPad13, isMobile } from "react-device-detect";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className="w-1/3 px-4 hidden md:block">
        <Parallax y={[75, -75]}>
          <img
            className="d-none d-md-block"
            alt="portrait"
            src="/images/portrait.jpg"
          />
        </Parallax>
      </div>
      <div className="w-full md:w-2/3 px-4 text-xl">
        <Parallax y={[-50, 50]} disabled={isMobile && !isIPad13}>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Antoine Gagnon.
          </h1>
          <p>
            Curiosity driven maker,{" "}
            <span className="font-semibold">Web Developer</span>, tech
            enthusiast
          </p>
          <hr className="my-2 border-gray-500" />
          <p className="pb-5">
            Computer science student at University of Sherbrooke
            {/* <br /> */}
            {/* Web developer at Coveo R&D */}
          </p>
        </Parallax>
      </div>
      <div className={styles.more}>
        <a>
          <span></span>
        </a>
      </div>
    </div>
  );
}
