import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className="flex px-5 justify-center items-center min-h-screen bg-gradient-to-br to-matcha-50 from-peach-50 via-matcha-50">
      <div>
        <h1>
          <span className="text-matcha-700 font-bold">Antoine</span>{" "}
          <span className="text-peach-500">Gagnon</span>
        </h1>
        <p className="text-peach-500 font-semibold text-xl">
          Curiosity & impact driven{" "}
          <span className="font-bold text-matcha-700">Web Developer</span>
        </p>
      </div>
      <div>
        <img
          className="d-none d-md-block"
          alt="portrait"
          src="/images/drip2.png"
        />
      </div>
      <div className={styles.more}>
        <a>
          <span></span>
        </a>
      </div>
    </div>
  );
}
