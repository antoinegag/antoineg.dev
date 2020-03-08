import React from "react";
import { Header } from "./Header";
import { VSCO } from "./VSCO";
import Instagram from "./Instagram";
import { Pro } from "./Pro";

export const Hello = () => {
  return (
    <div className="hello-bg min-h-full min-w-full">
      <div className="lg:w-2/6 lg:mx-auto px-10">
        <Header className="py-10" />
        <VSCO />
        <hr className="my-5" />
        <Instagram />
        <hr className="my-5" />
        <Pro />
      </div>
    </div>
  );
};
