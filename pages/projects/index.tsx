import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="min-h-full bg-gray-800 flex items-center justify-center text-white flex-col font-semibold">
      <div className="text-8xl mb-8">Projects</div>
      <div className="text-xl">Work in progress!</div>
      <Link href="/">
        <a className="underline font-normal">Home</a>
      </Link>
    </div>
  );
}
