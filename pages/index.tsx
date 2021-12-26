import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Experience from "../components/Home/Experience";
import Current from "../components/Home/Experience/Current";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import { getProjectsData, ProjectData } from "../lib/markdownPosts";

interface Props {
  projects: ProjectData[];
}

export default function index({ projects }: Props) {
  return (
    <>
      <NextSeo
        title="ANTOINEG.DEV"
        description="Curiosity driven maker, Web Developer, tech enthusiast"
        canonical="https://antoineg.dev/"
        openGraph={{
          url: "https://antoineg.dev",
          title: "ANTOINEG.DEV",
          description: "Curiosity driven maker, Web Developer, tech enthusiast",
          images: [
            {
              url: "https://antoineg.dev/images/action.jpg",
              width: 585,
              height: 585,
              alt: "Portrait",
            },
          ],
        }}
        twitter={{
          handle: "@antoineg_dev",
          site: "https://antoineg.dev",
          cardType: "summary_large_image",
        }}
      />
      <div className="h-full no-scrollbar snap snap-y snap-mandatory overflow-y-scroll">
        {/* <div className="bg-peach-500 p-5 text-peach-50 text-center">
          👋 Hey there! This site is in maintenance mode, limited content is
          available for now ✌️
        </div> */}
        <Hero className="snap-start" />
        <About className="snap-start" />
        <Current className="snap-start" />
        <Experience className="snap-start" />
        <Projects projects={projects} className="snap-start" />
        <Contact className="snap-start" />
      </div>
    </>
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
