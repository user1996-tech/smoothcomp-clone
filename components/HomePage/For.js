import React from "react";
import { global } from "../../global";
import GroupIcon from "../../public/GroupIcon";
import ResultsIcon from "../../public/ResultsIcon";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const options = [
  {
    icon: () => <ResultsIcon className="h-10 w-10 my-5" />,
    title: "for organizers",
    text: "Online payments, bracket generation,scheduling and weigh-ins. When it's time for the giths, the integrated scoreboard will make sure your tournamen gets full points.",
  },
  {
    icon: () => <GroupIcon className="h-10 w-10" />,
    title: "for coaches",
    text: "Be able to do bulk registrations, create new users and pay and search for all your fighters. We give you the overview you always wanted but never had.",
  },
  {
    icon: () => <SportsKabaddiIcon className="h-10 w-10" />,
    title: "for fighters",
    text: "Edit registrations and see your upcoming fights with a adynamic starting time. All the information you need is at your fingertips. We got your back ever time.",
  },
];

const For = () => {
  return (
    <div className={`bg-[${global.colors.third}]`}>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 divide-y divide-slate-500 md:divide-y-0 md:divide-x max-w-5xl px-0 md:px-10  md:mx-auto border-x-0 md:border-x border-slate-500`}
      >
        {options.map((option) => (
          <div
            className={`text-white flex flex-col items-center justify-center py-8 px-10`}
          >
            {option.icon()}
            <p className="text-center uppercase font-bold text-lg mb-5">
              {option.title}
            </p>
            <p className="text-center text-sm">{option.text}</p>
            <button className="p-2 rounded-md text-sm font-semibold text-white border border-white hover:border-gray-500 hover:text-gray-500 my-5">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default For;
