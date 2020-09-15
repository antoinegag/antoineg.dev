import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
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
          {t("bio.work")}
        </p>
        <p className="mb-2">
          {/* <p className="mb-2">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-700 mr-2"
              />
              {t("bio.looking_internship")}
            </p> */}
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
          to="about"
          spy={true}
          smooth={true}
          duration={600}
        >
          {t("about.link")}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
