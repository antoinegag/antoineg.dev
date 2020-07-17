import React from "react";
import { Header } from "./Header";
import { VSCO } from "./VSCO";
import Instagram from "./Instagram";
import Snapchat from "./Snapchat";
import { Pro } from "./Pro";
import Spotify from "./Spotify";

export const Hello = () => {
  return (
    <div className="hello-bg min-h-full min-w-full text-white pb-10">
      <div className="xl:w-3/12 lg:w-4/12 md:w-6/12 md:mx-auto px-10">
        <Header className="pt-10 pb-5" />
        <div className="slide-in">
          <Pro />
          <hr className="my-5" />
          <Instagram />
          <hr className="my-5" />
          <Snapchat />
          <hr className="my-5" />
          <Spotify />
          <hr className="my-5" />
          <VSCO />
        </div>
      </div>
    </div>
  );
};
