import React from "react";
import { useParallaxController } from "react-scroll-parallax";

// Override component for <img> to always update the parallax

export default function Image(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const parallaxController = useParallaxController();
  return (
    <img
      {...props}
      onLoad={(e) => {
        parallaxController?.update();
        if (props.onLoad != null) {
          props.onLoad(e);
        }
      }}
    />
  );
}
