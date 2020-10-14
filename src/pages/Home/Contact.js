import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="w-full second h-full" id="contact">
      <div className="text-center pt-10 pb-5">
        <h2 className="py-2">{t("contact.title")}.</h2>
        <p className="text-lg">{t("contact.description")}</p>
      </div>
      <div className="text-center text-xl">
        <div className="my-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <a href="mailto:contact@antoineg.dev" className="hover:underline">contact@antoineg.dev</a>
        </div>
        <div className="my-2 flex items-center justify-center">
          <a
            href="mailto:antoine.gagnon5@usherbrooke.ca"
            className="flex flex-wrap justify-center items-center hover:underline"
            target="_top"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <div className="flex-grow-0">antoine.gagnon5</div>
            <div className="flex-grow-0">@usherbrooke.ca</div>
          </a>
        </div>
        <div className="my-2 hover:underline">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <a href="https://www.linkedin.com/in/antoine-gagnon/">LinkedIn</a>
        </div>
        <div className="my-2 hover:underline">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          <a href="https://github.com/antoinegag">@antoinegag</a>
        </div>
        <div className="my-2 hover:underline">
          <FontAwesomeIcon icon={faTwitter} className="mr-2" />
          <a href="https://twitter.com/antoineg_dev">@antoineg_dev</a>
        </div>
      </div>
    </div>
  );
}
