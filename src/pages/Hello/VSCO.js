import React from "react";

export const VSCO = props => {
  return (
    <div {...props}>
      <a
        className="flex items-center"
        href="http://vsco.co/antoinega?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid"
      >
        <img
          style={{
            width: "48px",
            height: "48px"
          }}
          className="mr-5"
          src="http://assets.vsco.co/assets/images/assets/Logo_black_48.png"
          alt="VSCO Logo"
        />
        <span>
          <p className="text-3xl">Pictures</p>
          <p className="font-semibold">vsco.co/antoinega</p>
        </span>
      </a>
    </div>
  );
};
