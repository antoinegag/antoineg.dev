import React from "react";

export const VSCO = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center flex-row-reverse text-right"
        href="https://vsco.co/antoinega?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid"
      >
        <img
          style={{
            width: "48px",
            height: "48px",
          }}
          className="ml-5"
          src="https://assets.vsco.co/assets/images/assets/Logo_white_48.png"
          alt="VSCO Logo"
        />
        <span>
          <p className="text-3xl font-semibold">Pictures</p>
          <p className="font-semibold text-blueish underline">
            vsco.co/antoinega
          </p>
        </span>
      </a>
    </div>
  );
};
