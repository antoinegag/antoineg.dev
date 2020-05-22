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
      <div className="lg:w-2/6 lg:mx-auto px-10">
        <Header className="py-10" />
        <div className="slide-in">
          <Instagram />
          <hr className="my-5" />
          <Pro />
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
