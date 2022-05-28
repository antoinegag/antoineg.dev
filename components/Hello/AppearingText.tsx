import React from "react";
import Fade from "react-reveal/Fade";

interface Props {
  text: string;
  count?: number;
  initialDelay?: number;
  delayBetween?: number;
  order?: "TOP-BOTTOM" | "BOTTOM-TOP";
}

export function AppearingText({
  text,
  count = 1,
  initialDelay = 1200,
  delayBetween = 100,
  order = "TOP-BOTTOM",
}: Props) {
  const delays = [];
  if (order === "TOP-BOTTOM") {
    for (let i = 0; i < count; i++) {
      delays.push(initialDelay + i * delayBetween);
    }
  } else {
    const finalDelay = initialDelay + count * delayBetween;
    for (let i = 0; i < count; i++) {
      delays.push(finalDelay - i * delayBetween);
    }
  }

  return (
    <React.Fragment>
      {delays.map((delay) => (
        <Fade
          bottom={order === "BOTTOM-TOP"}
          top={order === "TOP-BOTTOM"}
          delay={delay}
        >
          <div className="lg:text-8xl text-4xl mb-2 stroke-white">{text}</div>
        </Fade>
      ))}
    </React.Fragment>
  );
}
