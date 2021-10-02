import React from "react";
import { ProjectData } from "../../../lib/markdownPosts";
import Hero from "./Hero";

export default function ProjectsIndex({
  projects,
}: {
  projects: ProjectData[];
}) {
  return (
    <div>
      <Hero />
    </div>
  );
}
