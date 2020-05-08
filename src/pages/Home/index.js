import React from "react";
import PostList from "../../components/PostList";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faComments,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-full">
      <div className="xl:px-64 main flex justify-center items-center h-full">
        <div class="w-1/3 px-4 hidden md:block">
          <img
            className="d-none d-md-block"
            alt="portrait"
            src="./assets/me.jpg"
          />
        </div>
        <div className="w-full md:w-2/3 px-4 text-lg">
          <h1 className="text-4xl md:text-6xl font-bold tiktok">
            Antoine Gagnon.
          </h1>
          <p className="text-lg">{t("intro")}</p>
          <hr className="my-2 border-gray-500" />
          <p className="pb-5">
            {t("bio.school")}
            <br />
            {/* {t("bio.work")} */}
          </p>
          <p className="text-xl font-bold mb-2">
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-700 mr-2"
              />
              {t("bio.looking_internship")}
            </p>
            <Link to="contact" spy={true} smooth={true} duration={600}>
              <FontAwesomeIcon icon={faComments} className="mr-2" />
              {t("contact.title")}
            </Link>
          </p>
          <div>
            {i18n.language === "fr" ? (
              <button onClick={() => i18n.changeLanguage("en")}>English</button>
            ) : (
              <button onClick={() => i18n.changeLanguage("fr")}>
                Français
              </button>
            )}
          </div>
        </div>
        <div className="text-2xl text-center absolute bottom-0 pb-10">
          <Link
            className="effect-underline"
            to="my-projects"
            spy={true}
            smooth={true}
            duration={600}
          >
            {t("projects.title")}
            <FontAwesomeIcon icon={faArrowAltCircleDown} className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="w-full" id="my-projects">
        <div className="text-center py-10">
          <h2 className="py-2">{t("projects.title")}.</h2>
          <p className="text-lg">{t("projects.description")}</p>
        </div>
        <PostList />
      </div>
      <div className="w-full second h-full" id="contact">
        <Contact />
      </div>
    </div>
  );
}
