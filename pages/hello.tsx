import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import { AppearingText } from "../components/Hello";

export default function Hello() {
  const getRandomImageIndex = () => Math.floor(Math.random() * 4);
  const [imageIndex, setImageIndex] = useState(getRandomImageIndex());
  const imageIndexRef = useRef(imageIndex);

  useEffect(() => {
    imageIndexRef.current = imageIndex;
  }, [imageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndexRef.current + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const styles = [
    "bg-gradient-to-b to-red-300 from-yellow-300 via-orange-200",
    "bg-gradient-to-br to-rgreen-400 from-blue-400",
    "bg-gradient-to-b to-blue-100 from-blue-100 via-stone-200",
    "bg-gradient-to-b to-stone-100 from-blue-400 via-green-200",
  ];
  return (
    <div
      className={`min-h-full flex items-center justify-between flex-col font-semibold ${styles[imageIndex]}`}
    >
      <div className="self-end mr-2 via-">
        <AppearingText
          initialDelay={1200}
          delayBetween={100}
          text="LINKS"
          count={3}
          order="TOP-BOTTOM"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-2">
          <img
            src={`/images/hello/${imageIndex}.jpg`}
            className="rounded-full h-44"
          />
        </div>
        <Fade top duration={750}>
          <div className="text-2xl mb-2 bg-gradient-to-tl text-white from-yellow-300 via-red-400 to-indigo-400 px-4 py-2 rounded-full">
            <a href="https://www.instagram.com/antoine.gagn/">Instagram</a>
          </div>
        </Fade>
        <Fade top delay={200} duration={750}>
          <div className="text-2xl mb-2  bg-gradient-to-br text-white from-orange-400 to-orange-600 px-4 py-2 rounded-full">
            <a href="https://www.strava.com/athletes/antoinegag">Strava</a>
          </div>
        </Fade>
      </div>
      <div className="self-start flex justify-between w-full">
        <div className="pl-1">
          <AppearingText
            initialDelay={1200}
            delayBetween={100}
            text="LINKS"
            count={3}
            order="BOTTOM-TOP"
          />
        </div>
        <div className="self-end pr-1 underline">
          <Fade bottom delay={1600}>
            <Link href="/">antoineg.dev</Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}
