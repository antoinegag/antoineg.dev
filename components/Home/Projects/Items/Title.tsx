import React from "react";
import classNames from "classnames";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={classNames(
        "text-2xl md:text-7xl font-semibold uppercase my-5",
        className
      )}
    >
      {children}
    </h2>
  );
}
