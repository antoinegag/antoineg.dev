import Link from "next/link";
import React from "react";
import styles from "../styles/hello.module.css";

export default function Hello() {
  return (
    <div className="min-h-full bg-gray-800 flex items-center justify-center text-white flex-col font-semibold">
      <div className="lg:text-8xl text-6xl mb-8 stroke-yellow">HELLO</div>
      <Link href="/">
        <a className={styles.media_link}>antoineg.dev</a>
      </Link>
      <Link href="/projects">
        <a className={styles.media_link}>My Projects</a>
      </Link>
      <a
        href="https://www.instagram.com/antoine.gagn/"
        className={styles.media_link}
      >
        Instagram
      </a>
      <a
        href="https://www.goodreads.com/user/show/131654245-antoine"
        className={styles.media_link}
      >
        Goodreads
      </a>
      <a
        href="https://open.spotify.com/user/antoinem8"
        className={styles.media_link}
      >
        Spotify
      </a>
      <a href="https://vsco.co/antoinega/gallery" className={styles.media_link}>
        VSCO
      </a>
      {/* <Link href="/">
        <a className="text-2xl underline font-normal yellow-wavy">Posts</a>
      </Link> */}
      <div className="lg:text-8xl text-6xl mb-8 stroke-yellow mt-6">HELLO</div>
    </div>
  );
}
