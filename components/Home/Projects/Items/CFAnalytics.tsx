import Link from "next/link";
import React from "react";
import Title from "./Title";
import classNames from "classnames";
import styles from "../projects.module.css";

export default function CFAnalytics() {
  return (
    <div className={classNames("", styles.project)}>
      <Title>
        <div className="flex items-center">
          <div>
            CF <span className="text-yellow-500">Analytics</span>
          </div>
          <div className="ml-8">
            <img
              src="/images/projects/cfanalytics-bg.png"
              width="100"
              height="100"
              className="rounded-lg"
            />
          </div>
        </div>
      </Title>
      <div>
        <p className="mb-3 md:text-3xl">
          A tool to visualise and analyse your CurseForge analytics export.
        </p>
        <p className="mb-3 md:text-3xl">Privacy focused. Trusted by users.</p>
      </div>
      <div className="yellow-wavy md:text-xl cursor-pointer">
        {/* <Link href="/projects/cfanalytics">
          <a className="lg:font-normal">Read more</a>
        </Link> */}
      </div>
      <a
        href="https://github.com/antoinegag/curseforge-analytics-viewer"
        target="_blank"
      >
        View on Github
      </a>
    </div>
  );
}
