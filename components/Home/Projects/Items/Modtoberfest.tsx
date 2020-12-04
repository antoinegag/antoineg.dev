import Link from "next/link";
import React from "react";
import Title from "./Title";
import Image from "next/image";

export default function Modtoberfest() {
  return (
    <div className="md:flex flex-wrap md:px-12 xl:px-32 md:min-h-screen items-center">
      <div className="md:w-2/3 pb-5">
        <Title>
          <div className="flex flex-wrap items-center">
            <span className="text-yellow-500">Modtober</span>fest
          </div>
        </Title>
        <p className="mb-3 md:text-3xl">
          A celebration of Open Source in the Minecraft community. An
          Hacktoberfest inspired event.
        </p>
        <p className="mb-3 md:text-3xl">
          Nearly 200 pull requests to open source Minecraft projects on Github
          in October 2020 by participants. 0 Spam.
        </p>
        <div className="yellow-wavy md:text-xl cursor-pointer">
          {" "}
          <Link href="/projects/modtoberfest">
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <div className="hidden md:visible md:flex justify-end xl:justify-center flex-grow">
        <Image
          src="/images/projects/modtoberfest.png"
          width="357"
          height="200"
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
