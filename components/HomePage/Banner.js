import React from "react";
import { global } from "../../global";

const Banner = () => {
  return (
    <div className={`text-white relative bg-white`}>
      <img
        src={global.image.homebanner}
        alt=""
        className="w-full h-[325px] lg:h-[500px] object-cover"
      />
      <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center md:items-start max-w-5xl mx-auto md:pr-[10%]">
        <p className="font-bold text-2xl md:text-4xl lg:text-5xl uppercase mx-5 md:mx-0 text-center leading-6 py-4 md:text-left">
          the world's best tournament software for combat sports
        </p>
        <p className="font-semibold text-md md:text-xl mx-5 md:mx-0 text-center leading-6 py-4 md:text-left">
          The smoothest way to participate, organize and follow competitions
        </p>

        <div className="space-x-2">
          <button
            className={`bg-[${global.colors.blue}] p-2 rounded-md text-sm font-semibold hover:bg-blue-900`}
          >
            Browse events
          </button>
          <button className="p-2 rounded-md text-sm font-semibold text-gray-500 border border-gray-500 hover:border-gray-700 hover:text-gray-700">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
