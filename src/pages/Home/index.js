import React, { Suspense } from "react";
import PostList from "../../components/PostList";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faComments,
  faMailBulk,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

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
          <h1 className="text-6xl font-bold tiktok">Antoine Gagnon.</h1>
          <p className="text-lg">{t("intro")}</p>
          <hr className="my-2 border-gray-500" />
          <p className="pb-5">
            {t("bio.school")}
            <br />
            {t("bio.work")}
          </p>
          <p>
            <Link to="contact" spy={true} smooth={true} duration={600}>
              <FontAwesomeIcon icon={faComments} className="mr-2" />
              {t("contact.title")}
            </Link>
          </p>
          <div>
            {i18n.language === "fr" ? (
              <button onClick={() => i18n.changeLanguage("en")}>English</button>
            ) : (
              <button onClick={() => i18n.changeLanguage("fr")}>Français</button>
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
        <div className="text-center py-10">
          <h2 className="py-2">{t("contact.title")}.</h2>
          <p className="text-lg">{t("contact.description")}</p>
        </div>
        <div className="text-center text-xl">
          <div className="my-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:antoine.gagnon5@usherbrooke.ca" target="_top">
              antoine.gagnon5@usherbrooke.ca
            </a>
          </div>
          <div className="my-2">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            <a href="https://twitter.com/antoinegag_dev">@antoinegag_dev</a>
          </div>
          <div className="my-2">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <a href="https://github.com/antoinegag">@antoinegag</a>
          </div>
          <div className="my-2">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <a href="https://www.linkedin.com/in/antoine-gagnon/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
