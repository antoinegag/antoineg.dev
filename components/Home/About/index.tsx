import React from "react";
import styles from "./about.module.css";
import classNames from "classnames";
import Pulse from "react-reveal/Pulse";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/images/desk1.jpg",
          amount: 0.2,
          props: { className: "md:right-16" },
        },
      ]}
      className={styles.about}
    >
      <div className="flex flex-grow items-center justify-center right">
        <div className="w-full md:w-2/3 px-4 text-xl blurred p-10">
          <h1 className="text-4xl md:text-6xl hidden md:flex md:flex-wrap">
            <div className="whitespace-no-wrap">Welcome to my</div>
            <div
              className={classNames(
                "ml-5 font-semibold text-yellow-500",
                styles.upsidedown
              )}
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
            My projects range from analytics dashboards to tailor-made event
            experiences to custom IoT devices, anything goes
          </p>
        </div>
        <div className="w-1/3 px-4 hidden md:block z-50">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <img
              className="d-none d-md-block"
              alt="portrait"
              src="/images/action.jpg"
            />
          </Parallax>
        </div>
      </div>
    </ParallaxBanner>
  );
}
