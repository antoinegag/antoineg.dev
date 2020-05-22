import React from "react";

const Snapchat = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center flex-row-reverse text-right"
        href="https://www.snapchat.com/add/antoine_12"
      >
        <img
          style={{
            width: "48px",
            height: "48px",
          }}
          className="white"
          src="./assets/snap.png"
          alt="Snapchat Ghost Logo"
        />
        <span className="mr-5">
          <p className="text-3xl font-semibold">Cat pictures</p>
          <p className="font-semibold text-blueish underline">antoine_12</p>
        </span>
      </a>
    </div>
  );
};

export default Snapchat;
