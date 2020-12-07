import { GetStaticProps } from "next";
import React from "react";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import { getProjectsData, ProjectData } from "../lib/markdownPosts";

interface Props {
  projects: ProjectData[];
}

export default function index({ projects }: Props) {
  return (
    <div className="h-full no-scrollbar">
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      {/* <div className="min-h-screen bg-gray-800">stuff</div> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjectsData();
  return {
    props: {
      projects,
    },
  };
};
