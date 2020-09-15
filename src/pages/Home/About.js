import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowRight,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faGit, faLinux } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      className="xl:px-64 second justify-center items-center w-full min-h-full flex flex-col"
      id="about"
    >
      <div className="text-center py-10">
        {/* <h2 className="py-2">{t("about.title")}.</h2> */}
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full md:w-2/3 px-4 text-lg">
          <h1 className="text-4xl md:text-6xl font-bold hidden md:flex md:flex-wrap">
            <div className="whitespace-no-wrap">{t("about.title-1")}</div>
            <div className="hupsidedown ml-5">{t("about.title-2")}</div>.
          </h1>
          <h1 className="block md:hidden text-3xl">{t("about.title")}</h1>
          <p className="mb-3">{t("about.text")}</p>
          <p className="mb-3">{t("about.drive")}</p>
          <p>{t("about.projects")}</p>
          <hr className="my-2 border-gray-500" />
          <div>
            <div className="mt-2 text-2xl font-bold">{t("about.tools")}</div>
            <div>
              <div className="mt-2 text-xl mb-1">{t("about.languages")}</div>
              <div className="ml-2 flex flex-wrap">
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/js-icon.png"
                    width="20"
                    className="mr-2"
                    alt="Java logo"
                  />
                  Javascrip + TS
                </div>
                <div className="mx-2">
                  <FontAwesomeIcon icon={faDatabase} className="mr-2" />
                  SQL
                </div>
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/java-icon.png"
                    width="20"
                    className="mr-2"
                    alt="Java logo"
                  />
                  Java
                </div>
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/cpp-icon.svg"
                    width="20"
                    className="mr-2"
                    alt="c++ logo"
                  />
                  C++
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 text-xl mb-1">{t("about.frameworks")}</div>
              <div className="ml-2 flex flex-wrap">
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/reactjs-icon.svg"
                    width="20"
                    className="mr-2"
                    alt="react logo"
                  />
                  React
                </div>
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/graphql-icon.svg"
                    width="20"
                    className="mr-2"
                    alt="graphql logo"
                  />
                  GraphQL
                </div>
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/nodejs-icon.svg"
                    width="20"
                    className="mr-2"
                    alt="nodejs logo"
                  />
                  NodeJS
                </div>
                <div className="mx-2 flex items-center">
                  <FontAwesomeIcon icon={faCloud} className="mr-2" />
                  Express
                </div>
                <div className="mx-2">
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  NextJS
                </div>
                <div className="mx-2 flex items-center">
                  <img
                    src="./assets/tailwindcss-icon.svg"
                    width="20"
                    className="mr-2"
                    alt="tailwindcss logo"
                  />
                  TailwindCSS
                </div>
              </div>
              <div>
                <div className="mt-2 text-xl mb-1">{t("about.other")}</div>
                <div className="ml-2 flex">
                  <div className="mx-2">
                    <FontAwesomeIcon icon={faDatabase} className="mr-2" />
                    PostgreSQL
                  </div>
                  <div className="mx-2">
                    <FontAwesomeIcon icon={faGit} className="mr-2" />
                    Git
                  </div>
                  <div className="mx-2">
                    <FontAwesomeIcon icon={faLinux} className="mr-2" />
                    Linux
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 px-4 hidden md:block">
          <img
            className="d-none d-md-block"
            alt="portrait"
            src="./assets/me-2.jpg"
          />
        </div>
      </div>
      {/* This is a hack to push the link at the bottom, don't remove it */}
      <div className="flex-grow"></div>
      <div className="text-2xl text-center self-end pb-10 mx-auto">
        <Link to="my-projects" spy={true} smooth={true} duration={600}>
          {t("projects.title")}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
