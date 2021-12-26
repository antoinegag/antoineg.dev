import React from "react";
import styles from "./hero.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
}

export default function Hero({ className }: Props) {
  return (
    <div
      className={classNames(
        "flex px-5 justify-center items-center min-h-screen bg-gradient-to-br to-green-50 from-peach-50 via-green-50",
        className
      )}
    >
      <div>
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-600 via-indigo-500 from-peach-500">
          Antoine Gagnon
        </h1>
        <p className="text-peach-500 font-semibold text-xl">
          Curiosity & impact driven{" "}
          <span className="font-bold text-green-700">Web Developer</span>
        </p>
      </div>
      <div>
        <img
          className="d-none d-md-block"
          alt="portrait"
          src="/images/drip2.png"
        />
      </div>
    </div>
  );
}
