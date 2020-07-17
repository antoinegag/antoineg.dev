import React from "react";

const Instagram = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center flex-row-reverse text-right"
        href="https://www.instagram.com/antoine.gagn/"
      >
        <img
          style={{
            width: "48px",
            height: "48px",
          }}
          className="white"
          src="./assets/instagram-glyph.png"
          alt="Instgram Logo"
        />
        <span className="mr-5">
          <p className="text-3xl font-semibold">Bits of life</p>
          <p>Happy moments</p>
          <p className="font-semibold text-blue-700 underline">@antoine.gagn</p>
        </span>
      </a>
    </div>
  );
};

export default Instagram;
