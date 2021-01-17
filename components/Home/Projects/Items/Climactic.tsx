import Link from "next/link";
import React from "react";
import Title from "./Title";
import classNames from "classnames";
import styles from "../projects.module.css";

export default function Climactic() {
  return (
    <div className={classNames("xl:text-center", styles.project)}>
      <div className="xl:mb-24">
        <Title>
          <div className="xl:text-center">
            <span className="text-yellow-500">Clima</span>ctic
          </div>
        </Title>
        <div>
          <p className="mb-3 md:text-3xl">
            IoT environmental data collection and reporting system built from
            scratch, from hardware to software.
          </p>
        </div>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {/* <Link href="/projects/climactic">
            <a className="lg:font-normal">Read more</a>
          </Link> */}
        </div>
        <a href="https://github.com/antoinegag/Climactic" target="_blank">
          View on Github
        </a>
      </div>
    </div>
  );
}
