import React from "react";

export const Pro = props => {
  return (
    <div {...props}>
      <a className="flex items-center" href="./">
        <img
          style={{
            width: "48px",
            height: "48px"
          }}
          className="mr-5 white"
          src="./assets/code.png"
          alt="VSCO Logo"
        />
        <span>
          <p className="text-3xl font-semibold">Professional</p>
          <p className="font-semibold text-blueish underline">antoineg.dev</p>
        </span>
      </a>
    </div>
  );
};
