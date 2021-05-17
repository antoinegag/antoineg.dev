import React from "react";
import handleViewport from "react-in-viewport";
import classNames from "classnames";

const Current = (props: {
  inViewport: boolean;
  forwardedRef: React.LegacyRef<HTMLDivElement>;
}) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="overflow-x-hidden py-32 min-h-screen flex flex-col justify-between px-5 bg-gradient-to-br to-green-50 from-peach-50 via-green-50">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto" ref={forwardedRef}>
        <div
          className={classNames(
            "absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform transition duration-1000 rounded-3xl overflow-hidden",
            { "-rotate-192": inViewport }
          )}
        ></div>
        <div
          className={classNames(
            "absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform transition delay-200 duration-700 rounded-3xl overflow-hidden",
            { "-rotate-186": inViewport }
          )}
        ></div>
        <div className="relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10">
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400">
            Currently on a mission at
          </h1>
          <div className="my-10">
            <div className="font-bold stroke-green text-4xl text-left md:w-2/3 mx-auto">
              Making commerce better
            </div>
            <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2">
              Shopify
            </div>
            <div className="font-bold stroke-green text-5xl text-right md:w-2/3 mx-auto">
              for everyone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default handleViewport(Current);
