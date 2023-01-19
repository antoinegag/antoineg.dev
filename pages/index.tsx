import moment from "moment";
import About from "../components/Home/About";
import Landing from "../components/Home/Landing";
import Tagline from "../components/Home/Tagline";
import WhatIDo from "../components/Home/WhatIDo";

export default function Home() {
  return (
    <div className="h-full flex flex-row items-center justify-center">
      <div className="h-full text-white flex-grow">
        <Landing />
        <Tagline />
        <About />
        <WhatIDo />
        <div className="h-full bg-black text-white flex items-center justify-center text-5xl p-5 text-center font-thin">
          Work in Progress :)
        </div>
      </div>
    </div>
  );
}
