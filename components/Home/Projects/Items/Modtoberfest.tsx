import Link from "next/link";
import React from "react";
import Title from "./Title";
import classNames from "classnames";
import styles from "../projects.module.css";

export default function Modtoberfest() {
  return (
    <div className={classNames(styles.project, "xl:w-1/2")}>
      <div>
        <Title>
          <div className="flex items-center">
            <div>
              <span className="text-yellow-500">Modtober</span>fest
            </div>
            <div className="ml-8 hidden md:visible md:block">
              <img
                src="/images/projects/modtoberfest.png"
                width="185"
                height="100"
                className="rounded-lg"
              />
            </div>
          </div>
        </Title>
        <p className="mb-3 md:text-3xl">
          A celebration of Open Source in the Minecraft community. An
          Hacktoberfest inspired event.
        </p>
        <p className="mb-3 md:text-3xl">
          Nearly 200 pull requests to open source Minecraft projects on Github
          in October 2020 by participants. 0 Spam.
        </p>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {" "}
          <Link href="/projects/modtoberfest">
            <a className="lg:font-normal">Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
