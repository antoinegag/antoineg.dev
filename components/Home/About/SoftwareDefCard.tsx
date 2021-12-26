import React from "react";
import styles from "./SoftwareDefCard.module.css";

const SoftwareDefCard = () => {
  return (
    <div className="font-open">
      <div className="text-4xl font-semibold">soft·ware</div>
      <div className="text-gray-700 text-sm">/ˈsôf(t)wer/</div>
      <div className="italic text-sm">noun</div>
      <div className="text-sm pl-5">
        the programs and other operating information used by a{" "}
        <span className={styles.computer}>computer</span>{" "}
        <span className="text-green-700 font-bold">human</span>.
      </div>
    </div>
  );
};

export default SoftwareDefCard;
