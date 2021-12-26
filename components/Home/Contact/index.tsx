import React from "react";
import { MailOpenIcon } from "@heroicons/react/outline";
import classNames from "classnames";

interface Props {
  className?: string;
}

export default function Contact({ className }: Props) {
  return (
    <div
      className={classNames(
        "min-h-screen py-10 text-center flex items-center justify-center bg-gradient-to-tl to-green-50 from-peach-50 via-green-50",
        className
      )}
    >
      <div className="text-2xl">
        <h1 className="text-green-700">Contact</h1>
        <div className="text-3xl">
          My inbox is always <span>open</span>
        </div>
        <div className="text-base mb-8">
          (just please don't add me to your newsletter)
        </div>
        <div className="mb-2 flex items-center justify-center">
          <MailOpenIcon height="24" className="text-peach-500 mr-2" />
          <a href="mailto:hello@antoineg.dev">hello@antoineg.dev</a>
        </div>
        <div className="mb-2 flex items-center justify-center">
          <img
            src="/images/icons/twitter.png"
            height="24"
            width="24"
            className="mr-2"
          />
          <a href="https://twitter.com/antoineg_dev">@antoineg_dev</a>
        </div>
        <div className="mb-2 flex items-center justify-center">
          <img
            src="/images/icons/linkedin.png"
            height="24"
            width="24"
            className="mr-2"
          />
          <a href="https://www.linkedin.com/in/antoine-gagnon/">
            antoine-gagnon
          </a>
        </div>

        <div className="mb-2 flex items-center justify-center">
          <img
            src="/images/icons/github.png"
            height="24"
            width="24"
            className="mr-2"
          />
          <a href="https://github.com/antoinegag">@antoinegag</a>
        </div>
      </div>
    </div>
  );
}
