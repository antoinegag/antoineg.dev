import React from "react";
import styles from "./about.module.css";
import classNames from "classnames";
import { Parallax } from "react-parallax";
import Pulse from "react-reveal/Pulse";

export default function About() {
  return (
    <Parallax
      bgImage="/images/desk1.jpg"
      bgImageAlt="Desktop"
      bgClassName="hidden md:block"
      strength={600}
      className={styles.about}
    >
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full md:w-2/3 px-4 text-xl blurred p-10 h-full">
          <h1 className="text-4xl md:text-6xl hidden md:flex md:flex-wrap">
            <div className="whitespace-no-wrap">Welcome to my</div>
            <div
              className={classNames("ml-5 font-semibold", styles.upsidedown)}
            >
              <Pulse>world</Pulse>
            </div>
            .
          </h1>
          <h1 className="block md:hidden text-3xl font-semibold">
            Welcome to my world
          </h1>
          <p className="mb-3">
            I'm a{" "}
            <span className="font-semibold">Full-stack web developer</span> but
            I don't like to stop myself at that, give me a challenge or pique my
            curiosity and that title becomes{" "}
            <span className="line-through">irrelevant</span>.
          </p>
          <p className="mb-3">
            I love to learn and learn to build great products. I'm driven by the
            impact my work makes on people's life at any and every scale, big or
            small.
          </p>
          <p>
            My projects range from analytics dashboard to tailor made experience
            for events to custom IoT devices, anything goes.
          </p>
        </div>
        <div className="w-1/3 px-4 hidden md:block">
          <img
            className="d-none d-md-block"
            alt="portrait"
            src="/images/action.jpg"
          />
        </div>
      </div>
    </Parallax>
  );
}
