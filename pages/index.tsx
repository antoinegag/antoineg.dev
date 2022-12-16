import Landing from "../components/Home/Landing";
import Tagline from "../components/Home/Tagline";

export default function Home() {
  return (
    <div className="h-full flex flex-row items-center justify-center">
      <div className="h-full text-white flex-grow">
        <Landing />
        <Tagline />
        <div className="h-full bg-red-600"></div>
      </div>
    </div>
  );
}
