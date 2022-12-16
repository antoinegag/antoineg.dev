import React from "react";
import styles from "./Landing.module.css";
import { Unbounded } from "@next/font/google";
import classNames from "classnames";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className="flex min-h-full w-full items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1
            className={classNames(
              "text-white bg-black bg-opacity-80 p-2 text-3xl w-full",
              unbounded.className
            )}
          >
            <div className="text-left pr-3">Antoine</div>
            <div className="text-right pl-3">Gagnon</div>
          </h1>
        </div>
      </div>
      <video
        className="h-full object-cover max-h-full overflow-hidden"
        src="tease.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
