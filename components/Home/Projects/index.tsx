import React from "react";
import { ProjectData } from "../../../lib/markdownPosts";
import Header from "./Header";
import AntoineGDev from "./Items/AntoineGDev";
import CFAnalytics from "./Items/CFAnalytics";
import Modtoberfest from "./Items/Modtoberfest";
import Sara from "./Items/Sara";
import styles from "./projects.module.css";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <div className={styles.projects}>
      <Header />
      <div className="px-5 md:px-10">
        {/* There is a post for each project but for the sake of customization, let's not just map them */}
        <AntoineGDev />
        <Sara />
        <Modtoberfest />
        <CFAnalytics />
      </div>
      <div></div>
    </div>
  );
}
