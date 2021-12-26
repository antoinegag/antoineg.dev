import React from "react";
import { ProjectData } from "../../../lib/markdownPosts";
import Hero from "./Hero";
import classNames from "classnames";

interface Props {
  className?: string;
  projects: ProjectData[];
}

export default function ProjectsIndex({ className, projects }: Props) {
  return (
    <div className={classNames(className)}>
      <Hero />
    </div>
  );
}
