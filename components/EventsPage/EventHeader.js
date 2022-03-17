import React from "react";
import { global } from "../../global";

const options = [
  "Home",
  "Events",
  "Membership",
  "News",
  "Information",
  "Ranking",
  "Ranking history 2014-2018",
];

const EventHeader = () => {
  return (
    <div className="bg-black hidden sm:block">
      <div className="w-full flex items-center max-w-5xl mx-auto px-10 justify-between flex-wrap">
        <img src={global.image.logoafbjj} className="h-18 py-1" />

        <div className="flex whitespace-normal flex-wrap divide-x divide-[#28292A]">
          {options.map((option) => (
            <div className="h-20 flex items-center text-white hover:text-gray-500 text-sm px-5 whitespace-nowrap">
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
