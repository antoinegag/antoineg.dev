import React, { useEffect, useState } from "react";
import { ProjectData } from "../../../lib/markdownPosts";
import Pyramid from "../../3D/Pyramid";
import Header from "./Header";
import AntoineGDev from "./Items/AntoineGDev";
import CFAnalytics from "./Items/CFAnalytics";
import Climactic from "./Items/Climactic";
import Modtoberfest from "./Items/Modtoberfest";
import Sara from "./Items/Sara";
import styles from "./projects.module.css";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <div className={styles.projects}>
      <Header />
      <Pyramid className="min-h-screen sticky top-0 z-0" />
      <div className="px-5 z-10">
        <AntoineGDev />
        <Sara />
        <div className="xl:flex">
          <Modtoberfest />
          <CFAnalytics />
        </div>
        <Climactic />
      </div>
    </div>
  );
}
