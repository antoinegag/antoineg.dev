import React from "react";
import { Header } from "./Header";
import { VSCO } from "./VSCO";
import Instagram from "./Instagram";
import { Pro } from "./Pro";

export const Hello = () => {
  return (
    <div className="lg:w-2/6 lg:mx-auto px-10 hello-bg min-h-full">
      <Header className="py-10" />
      <VSCO />
      <hr className="my-5" />
      <Instagram />
      <hr className="my-5" />
      <Pro />
    </div>
  );
};
