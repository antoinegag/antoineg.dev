import React from "react";
import { ProjectData } from "../../../lib/markdownPosts";
import AntoineGDev from "./Items/AntoineGDev";
import CFAnalytics from "./Items/CFAnalytics";
import Climactic from "./Items/Climactic";
import Modtoberfest from "./Items/Modtoberfest";
import Sara from "./Items/Sara";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="min-h-screen w-full flex flex-col text-white bg-peach-50">
      <div className="font-bold text-5xl md:text-8xl text-green-800">
        What I do
      </div>
      <AntoineGDev />
      <Sara />
      <div className="xl:flex">
        <Modtoberfest />
        <CFAnalytics />
      </div>
      <Climactic />
    </div>
  );
}
