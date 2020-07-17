import React from "react";

export const Header = (props) => {
  return (
    <div {...props}>
      <div className="text-4xl text-center">
        Hi{" "}
        <span role="img" aria-label="waving emoji">
          👋
        </span>
      </div>
    </div>
  );
};
