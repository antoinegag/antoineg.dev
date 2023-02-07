import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

export default function Tagline() {
  return (
    <div className="h-full bg-white-600 max-w-7xl mx-auto">
      <div className="h-full">
        <ParallaxBanner
          className="h-full"
          layers={[
            {
              className: "md:m-72",
              style: { maxWidth: "729px" },
              image: "images/me/sunset-erase.jpg",
              speed: -10,
            },
            {
              speed: isMobile ? -20 : -30,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-6xl text-white text-center w-2/3 font-extralight [&>*]:pb-2">
                    <div className="font-light">Curiosity</div>
                    <div className="text-4xl">&</div>
                    <div className="font-light">Impact</div>
                    <div className="text-4xl">driven</div>
                    <div className="text-5xl">Maker</div>
                  </h2>
                </div>
              ),
            },
            {
              className: "-ml-8",
              image: "images/me/sunset-cut.png",
              speed: isMobile ? -12 : -20,
            },
          ]}
        />
      </div>
    </div>
  );
}
