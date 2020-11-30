import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-7xl font-semibold uppercase my-5">
      {children}
    </h2>
  );
}
