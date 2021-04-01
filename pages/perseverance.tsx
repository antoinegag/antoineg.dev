import { NextSeo } from "next-seo";
import React, { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { isIPad13, isMobile } from "react-device-detect";
import Rover from "../components/3D/Rover";

const Perseverance = () => {
  const date = Date.UTC(2021, 1, 18, 20, 54, 53);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Landed!</div>;
    } else {
      return (
        <span>
          {zeroPad(hours)}
          <span className="text-yellow-600">:</span>
          {zeroPad(minutes)}
          <span className="text-yellow-600">:</span>
          {zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <>
      <NextSeo
        title="Perseverance landing"
        description="Perseverance landing countdown"
        canonical="https://antoineg.dev/perseverance"
        openGraph={{
          url: "https://antoineg.dev/perseverance",
          title: "Perseverance landing",
          description: "Perseverance landing countdown",
        }}
        twitter={{
          handle: "@antoineg_dev",
          site: "https://antoineg.dev",
          cardType: "summary_large_image",
        }}
      />
      <div className="bg-gray-800 w-full min-h-screen">
        <div className="w-full text-center pt-12 absolute">
          <div className="text-2xl lg:text-8xl text-white">
            Perseverance landing
          </div>
          <div className="text-white text-4xl lg:text-9xl w-full text-center py-5 font-bold font-mono">
            <Countdown date={date} renderer={renderer} />
          </div>
          <div className="text-white">
            {isMobile || isIPad13
              ? "Touch and drag to explore the rover"
              : "Click and drag to explore the rover"}
          </div>

          <div className="text-yellow-500 pb-0">antoineg.dev/perseverance</div>
        </div>
        <Rover className="min-h-screen bg-gray-800 top-0 z-0 w-full" />
      </div>
    </>
  );
};

export default Perseverance;
