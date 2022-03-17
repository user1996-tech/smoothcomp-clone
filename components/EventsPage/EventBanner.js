import React, { useState } from "react";
import RegistrationIcon from "../../public/RegistrationIcon";
import BracketIcon from "../../public/BracketIcon";
import ResultsIcon from "../../public/ResultsIcon";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import EditPad from "../../public/EditPad";
import Pad from "../../public/Pad";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import { global } from "../../global";

const options = [
  {
    title: "Info",
    icon: () => <InformationCircleIcon className="h-7 w-7" />,
  },
  {
    title: "Registration",
    icon: () => <RegistrationIcon className="h-7 w-7" />,
  },
  {
    title: "Brackets",
    icon: () => <BracketIcon className="h-7 w-7" />,
  },
  {
    title: "Result",
    icon: () => <ResultsIcon className="h-7 w-7" />,
  },
  {
    title: "Location",
    icon: () => <LocationMarkerIcon className="h-7 w-7" />,
  },
];

const EventBanner = () => {
  const [page, setPage] = useState(options[0].title);
  return (
    <>
      <div className="bg-[#1C1C1C] text-white py-2 md:hidden">
        <div className="relative">
          <img src={global.image.eventbanner} alt="" className="w-full" />
          <div className="absolute left-2 bottom-4 text-white font-semibold sm:hidden">
            20 Feb- 27 Feb
          </div>
        </div>

        <div className="grid grid-cols-2 py-2">
          <div className="text-xs px-5">
            <div>Normal registration</div>
            <div>
              <span className="text-lg font-semibold">09 May -10 Feb</span>{" "}
              11:59 pm
            </div>
          </div>

          <div className="text-xs px-5">
            <div>Late registration</div>
            <div>
              Deadline {"  "}
              <span className="text-lg font-semibold">22 Feb</span>
              {"  "}
              11:59pm
            </div>
          </div>
        </div>

        <div className="justify-self-stretch flex items-center justify-center my-3 mx-5 py-1 bg-blue-400 hover:bg-blue-500 rounded cursor-pointer">
          Register to event
        </div>

        <div className="w-full grid justify-items-stretch grid-flow-col">
          {options.map((option) => {
            return (
              <div
                className={`flex flex-col items-center border p-2 border-b-0 cursor-pointer ${
                  page == option.title ? "bg-[#1C1C1C]" : "bg-[#202838]"
                }`}
                onClick={() => {
                  setPage(option.title);
                }}
              >
                {option.icon()}
                <p className="text-xs">{option.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block bg-[#1C1C1C] text-white py-1 max-w-5xl mx-auto px-5">
        <div className="w-full relative">
          <img
            src={global.image.eventbanner}
            alt=""
            className="object-contain rounded-t-md"
          />

          <div className="bg-black top-0 right-0 w-[300px] absolute rounded-tr-md h-full flex flex-col justify-between px-3">
            <div className="w-full flex items-center justify-around flex-1 divide-x divide-[#28292A]">
              <Pad className="text-blue-500 w-7 h-7" />
              <div className="text-sm pl-10">
                <p>Normal registration</p>
                <p>
                  <span className="font-semibold">09 May - 10 Feb</span> 11:59
                  pm
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-around flex-1 divide-x divide-[#28292A]">
              <EditPad className="text-red-500 w-7 h-7" />
              <div className="text-sm pl-10">
                <p>Normal registration</p>
                <p>
                  <span className="font-semibold">09 May - 10 Feb</span> 11:59
                  pm
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-around flex-1 divide-x divide-[#28292A]">
              <SportsKabaddiIcon className="text-white w-7 h-7" />
              <div className="text-sm pl-10">
                <p>Normal registration</p>
                <p>
                  <span className="font-semibold">09 May - 10 Feb</span> 11:59
                  pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8F8] text-gray-500 flex items-center justify-between rounded-b-md text-sm">
          <div className="flex">
            <div className="cursor-pointer hover:bg-[#E7E7E7] h-10 flex items-center px-5 rounded-bl-md">
              Information
            </div>
            <div className="cursor-pointer hover:bg-[#E7E7E7] h-10 flex items-center px-5">
              Registrations
            </div>
            <div className="cursor-pointer hover:bg-[#E7E7E7] h-10 flex items-center px-5">
              Brackets & schedule
            </div>
            <div className="cursor-pointer hover:bg-[#E7E7E7] h-10 flex items-center px-5">
              Result
            </div>
            <div className="cursor-pointer hover:bg-[#E7E7E7] h-10 flex items-center px-5">
              Location & Accommodation
            </div>
          </div>

          <div className="cursor-pointer text-white text-sm bg-[#189DE0] px-5 py-1 mr-5 rounded-sm">
            Register to event
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBanner;
