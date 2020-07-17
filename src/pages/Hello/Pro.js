import React from "react";

export const Pro = (props) => {
  return (
    <div {...props}>
      <a className="flex items-center" href="./">
        <img
          style={{
            width: "48px",
            height: "48px",
          }}
          className="mr-5 white"
          src="./assets/code.png"
          alt="VSCO Logo"
        />
        <span>
          <p className="text-3xl font-semibold">My projects</p>
          <p>My passion and hobby</p>
          <p className="font-semibold text-blue-700 underline">antoineg.dev</p>
        </span>
      </a>
    </div>
  );
};
