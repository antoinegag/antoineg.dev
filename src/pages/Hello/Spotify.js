import React from "react";

const Spotify = (props) => {
  return (
    <div {...props}>
      <a
        className="flex items-center flex-row-reverse text-right"
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
        <span className="mr-5">
          <p className="text-3xl font-semibold">Music</p>
          <p>Playlists for everything</p>
          <p className="font-semibold text-blue-700 underline">antoinem8</p>
        </span>
      </a>
    </div>
  );
};

export default Spotify;
