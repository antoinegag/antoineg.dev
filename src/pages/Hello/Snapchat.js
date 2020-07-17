import React from "react";

const Snapchat = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center"
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
        <span className="ml-5">
          <p className="text-3xl font-semibold">Cat pictures</p>
          <p>(mostly)</p>
          <p className="font-semibold text-blue-700 underline">antoine_12</p>
        </span>
      </a>
    </div>
  );
};

export default Snapchat;
