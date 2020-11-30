import Link from "next/link";
import React from "react";
import { ProjectData } from "../../../../lib/markdownPosts";
import Title from "./Title";
import styles from "../projects.module.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Modtoberfest({ data }: { data: ProjectData }) {
  return (
    <div className="md:flex flex-wrap md:py-32 md:px-24 lg:px-32 items-center">
      <div className="md:w-2/3 pb-5">
        <Title>
          <div className="flex flex-wrap items-center">
            <span className="text-yellow-500">Modtober</span>fest
            <img
              src="/images/projects/modtoberfest.png"
              width="300px"
              className="md:ml-12"
            />
          </div>
        </Title>
        <p className="mb-3 md:text-3xl">
          Platform enabling a hundred participant to track their progress in
          Modtoberfest, a Hacktoberfest inspired event where people had to
          participate in open source Minecraft projects.
        </p>
        <p className="mb-6 md:text-3xl">
          Participants could sign up or login in 2 clicks with their Github
          account and instantly start tracking their progress through October.
        </p>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {" "}
          <Link href={`/projects/${data.id}`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <div className="md:text-4xl md:w-1/3 md:text-right pb-5">
        <div className="md:text-5xl font-semibold">Built with</div>
        <div>
          {data.tech?.map((tech) => (
            <div className="pt-1">{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
