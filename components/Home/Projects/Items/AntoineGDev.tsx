import Link from "next/link";
import React from "react";
import { ProjectData } from "../../../../lib/markdownPosts";
import Title from "./Title";
import styles from "../projects.module.css";
import { Parallax } from "react-scroll-parallax";

export default function AntoineGDev({ data }: { data: ProjectData }) {
  return (
    <div className="md:flex flex-wrap md:py-32 md:px24 lg:px-32 items-center">
      <div className="md:w-2/3 pb-5">
        <Title>
          antoineg<span className="text-yellow-500">.dev</span>
        </Title>
        <div className="mb-3 md:text-4xl">This very site! Hi!</div>
        <div className="mb-6 md:text-3xl">
          This is the second iteration of my personal website, it is statically
          generated and contains my projects, posts and other information.
        </div>
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
