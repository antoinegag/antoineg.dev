import Link from "next/link";
import React from "react";

export default function NotFound404() {
  return (
    <div className="min-h-full bg-gray-800 flex items-center justify-center text-white flex-col font-semibold">
      <div className="text-8xl mb-8">Page Not Found</div>
      <div className="text-xl mb-8 text-yellow-500">404</div>
      <Link href="/">
        <a className="text-2xl underline font-normal yellow-wavy">Home</a>
      </Link>
    </div>
  );
}
