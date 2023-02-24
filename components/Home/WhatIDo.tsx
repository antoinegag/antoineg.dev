import { Unbounded } from "@next/font/google";
import classNames from "classnames";
import moment from "moment";
import React from "react";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function WhatIDo() {
  return (
    <div className="text-black py-10 flex items-center min-h-full justify-center">
      <div>
        <h2 className={classNames(unbounded.className, "text-4xl pb-2 pl-10")}>
          What I do
        </h2>
        <div className="max-w-xl">
          <div className="p-5 border border-gray-400 rounded-lg m-5 sticky">
            <div className="flex pb-2">
              <img
                src="images/me/velo-no-glasses.jpg"
                className="w-16 h-16 object-cover rounded-full mr-2"
              />
              <div>
                <div className="flex items-center">
                  <div className="font-medium mr-1">Antoine Gagnon</div>
                  <div className="text-gray-600 text-sm">&#x2022; 2nd </div>
                </div>
                <div className="text-gray-700 text-sm">
                  Frontend Web Developer at Shopify
                </div>
                <div className="font-bold text-sm">
                  May 2022 - {moment([2022, 5, 1]).fromNow()}
                </div>
              </div>
            </div>
            <div className="pb-2 text-gray-700">
              <div>Starting a new position as </div>
              <div className="font-bold text-lg text-black">
                Frontend Web Developer at Shopify
              </div>
              <div>(not professional cyclist)</div>
            </div>
            <div>
              <img src="images/me/shopify-cc.jpg" className="rounded-md" />
            </div>
          </div>
          <div className="px-5 lg:text-xl">
            <a
              className="underline font-bold"
              href="https://www.linkedin.com/in/antoine-gagnon/"
            >
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
