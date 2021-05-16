import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="overflow-hidden pt-16 min-h-screen flex flex-col justify-between px-5 bg-gradient-to-br to-green-50 from-peach-50 via-green-50">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 shadow-lg transform -rotate-12 rounded-3xl overflow-hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-peach-200 to-peach-500 shadow-lg transform -rotate-6 rounded-3xl overflow-hidden"></div>
          <div className="relative text-center w-full my-auto bg-white shadow-lg rounded-3xl p-10">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-peach-500 via-indigo-400">
              Currently on a mission at
            </h1>
            <div className="my-10">
              <div className="font-bold stroke-green text-4xl text-left md:w-2/3 xl:w-1/4 mx-auto">
                Making commerce better
              </div>
              <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-green-700 from-green-600 pb-2">
                Shopify
              </div>
              <div className="font-bold stroke-green text-5xl text-right md:w-2/3 xl:w-1/4 mx-auto">
                for everyone
              </div>
            </div>
            {/* <p className="text-2xl">
          Making commerce better for{" "}
          <span className="text-green-600 font-semibold">everyone</span>.
        </p> */}
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-between px-5 bg-gradient-to-tl to-green-50 from-peach-50 via-green-50">
        <div className="w-full text-center my-auto">
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-indigo-400 to-peach-500">
            Awesome places I've worked at
          </h1>
          <p className="text-green-900 font-semibold text-xl xl:w-1/2 md:w-2/3 m-auto mb-10">
            I've been fortunate to find great companies with great people along
            my path to help people with software. Here they are.
          </p>
          <div className="mb-10">
            <div className="font-bold stroke-yellow text-4xl text-left md:w-1/2 xl:w-1/4 mx-auto">
              Making time
            </div>
            <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-peach-600 from-peach-500 pb-2">
              Agendrix
            </div>
            <div className="font-bold stroke-yellow text-5xl text-right md:w-1/2 xl:w-1/4 mx-auto">
              count
            </div>
            <p className="text-2xl">
              Making management about{" "}
              <span className="text-green-600 font-semibold">people first</span>
              .
            </p>
          </div>
          <div className="mb-10">
            <div className="font-bold stroke-indigo text-4xl text-left md:w-1/2 xl:w-1/4 mx-auto">
              Making search
            </div>
            <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-l to-indigo-800 from-indigo-900 pb-2">
              Coveo
            </div>
            <div className="font-bold stroke-indigo text-5xl text-right md:w-1/2 xl:w-1/4 mx-auto">
              relevant
            </div>
            <p className="text-2xl">
              Bringing relevance in the hand of{" "}
              <span className="text-green-600 font-semibold">people</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;