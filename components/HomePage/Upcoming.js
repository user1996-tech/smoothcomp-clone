import React from "react";
import CalendarIcon from "../../public/CalendarIcon";
import { global } from "../../global";

const options = [
  {
    title: "czech championship submission only 2022",
    image: global.image.homeevent1,
  },
  {
    title: "champtionnats de france de sambo sportif",
    image: global.image.homeevent2,
  },
  {
    title: "grappling industries arnold classic",
    image: global.image.homeevent3,
  },
  {
    title: "the revolution 45",
    image: global.image.homeevent4,
  },
];

const Upcoming = () => {
  return (
    <div className={`text-white p-4 bg-[${global.colors.fourth}]`}>
      <div className="max-w-5xl mx-auto">
        <div className="w-full flex items-center justify-between">
          <p className="uppercase font-bold text-3xl py-4">upcoming events</p>

          <div className="hidden md:flex space-x-2">
            <button
              className={`bg-[${global.colors.grey}] p-2 rounded-md text-sm font-semibold hover:bg-gray-500`}
            >
              Create event
            </button>
            <button
              className={`bg-[${global.colors.blue}] p-2 rounded-md text-sm font-semibold hover:bg-blue-900`}
            >
              See all events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {options.map((option) => (
            <div className="">
              <div className="relative">
                <img
                  src={option.image}
                  alt=""
                  className="w-full h-17 object-cover"
                />
                <div
                  className={`absolute top-2 left-2 text-xs font-semibold py-1 px-2 rounded-full bg-[${global.colors.blue}]`}
                >
                  TODAY
                </div>
              </div>
              <p className="uppercase font-bold text-sm">{option.title}</p>
              <div className="flex items-center">
                <CalendarIcon className="text-gray-500 h-4 w-4" />
                <p className="ml-2 my-1 text-gray-500 text-sm">March 05 - 06</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full my-5 space-y-2 block md:hidden">
          <button
            className={`bg-[${global.colors.grey}] p-2 rounded-md text-sm font-semibold hover:bg-gray-500 w-full`}
          >
            Create event
          </button>
          <button
            className={`bg-[${global.colors.blue}] p-2 rounded-md text-sm font-semibold hover:bg-blue-900 w-full`}
          >
            See all events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
