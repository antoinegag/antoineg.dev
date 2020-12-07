import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="text-2xl">
        <h1>Contact</h1>
        <div className="text-3xl mb-8">Find me on the internet</div>
        <div className="mb-2">
          Email{" "}
          <a href="mailto:hello@antoineg.dev" className="underline">
            hello@antoineg.dev
          </a>
        </div>
        <div className="mb-2">
          Twitter{" "}
          <a href="https://twitter.com/antoineg_dev" className="underline">
            @antoineg_dev
          </a>
        </div>
        <div className="mb-2">
          LinkedIn{" "}
          <a
            href="https://www.linkedin.com/in/antoine-gagnon/"
            className="underline"
          >
            antoine-gagnon
          </a>
        </div>

        <div className="mb-2">
          Github{" "}
          <a href="https://github.com/antoinegag" className="underline">
            @antoinegag
          </a>
        </div>
      </div>
    </div>
  );
}
