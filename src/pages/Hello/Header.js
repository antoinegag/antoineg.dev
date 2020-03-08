import React from "react";

export const Header = props => {
  return (
    <div {...props}>
      <div className="sm:w-2/6 sm:mx-auto">
        <p className="text-4xl text-left">Well,</p>
        <p className="text-5xl text-center">
          <span className="animated-bold-1 font-semibold">Hello</span> there.
        </p>
        <p className="text-3xl text-right">
          Who are <span className="animated-bold-2 font-semibold">you</span>?
        </p>
      </div>
    </div>
  );
};
