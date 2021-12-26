import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";

export default function Hello() {
  const decoration = "LINKS";
  return (
    <div className="min-h-full flex items-center justify-between flex-col font-semibold  bg-gradient-to-tl to-green-100 from-peach-100 via-green-50">
      <div className="self-end mr-2">
        <Fade top delay={1200}>
          <div className="lg:text-8xl text-5xl mb-2 stroke-yellow">
            {decoration}
          </div>
        </Fade>
        <Fade top delay={1300}>
          <div className="lg:text-8xl text-5xl mb-2 stroke-yellow">
            {decoration}
          </div>
        </Fade>
        <Fade top delay={1400}>
          <div className="lg:text-8xl text-5xl mb-2 stroke-yellow">
            {decoration}
          </div>
        </Fade>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-2">
          <img src="/images/headshot.jpg" className="rounded-full h-32" />
          <div className="text-xl">Antoine Gagnon</div>
        </div>
        {/* <div className="mb-2">
          <Link href="/">
            <a className="text-2xl">antoineg.dev</a>
          </Link>
        </div> */}
        <Fade top duration={750}>
          <div className="text-2xl mb-2 bg-gradient-to-tl text-white from-yellow-300 via-red-400 to-indigo-400 px-4 py-2 rounded-full">
            <a href="https://www.instagram.com/antoine.gagn/">Instagram</a>
          </div>
        </Fade>
        <Fade top delay={200} duration={750}>
          <div className="text-2xl mb-2  bg-gradient-to-br text-white from-green-400 to-green-600 px-4 py-2 rounded-full">
            <a href="https://open.spotify.com/user/antoinem8">Spotify</a>
          </div>
        </Fade>
        <Fade top delay={400} duration={750}>
          <div className="text-2xl mb-2 bg-gradient-to-tl text-white from-black to-gray-600 px-4 py-2 rounded-full">
            <a href="https://vsco.co/antoinega/gallery">VSCO</a>
          </div>
        </Fade>
      </div>
      <div className="self-start flex justify-between w-full">
        <div className="pl-1">
          <Fade bottom delay={1400}>
            <div className="lg:text-8xl text-4xl mb-2 stroke-yellow">
              {decoration}
            </div>
          </Fade>
          <Fade bottom delay={1300}>
            <div className="lg:text-8xl text-4xl mb-2 stroke-yellow">
              {decoration}
            </div>
          </Fade>
          <Fade bottom delay={1200}>
            <div className="lg:text-8xl text-4xl mb-2 stroke-yellow">
              {decoration}
            </div>
          </Fade>
        </div>
        <div className="self-end pr-1 underline">
          <Fade bottom delay={1600}>
            <Link href="/">antoineg.dev</Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}
