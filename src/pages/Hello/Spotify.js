import React from "react";

const Spotify = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center"
        href="https://open.spotify.com/user/antoinem8"
      >
        <img
          style={{
            height: "48px",
          }}
          className="white"
          src="./assets/spotify.png"
          alt="Spotify Logo"
        />
        <span className="ml-5">
          <p className="text-3xl font-semibold">Music</p>
          <p className="font-semibold text-blueish underline">antoinem8</p>
        </span>
      </a>
    </div>
  );
};

export default Spotify;
