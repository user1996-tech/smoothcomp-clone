import React from "react";
import { global } from "../../global";

const accountOptions = [
  {
    title: "My Profile",
  },
  {
    title: "Settings",
  },
  {
    title: "Shared user data",
  },
  {
    title: "Smoothcomp ID",
  },
];

const Account = () => {
  return (
    <div className="">
      <div className="w-full relative">
        <div className="flex flex-wrap justify-between items-center top-0 left-0 right-0 mx-auto w-full max-w-5xl py-10 px-3 relative z-20">
          <div className="text-3xl uppercase font-bold">Austin Loh</div>
          <div className="space-y-2 my-7">
            {accountOptions.map((option) => (
              <button
                type="submit"
                className={`bg-[${global.colors.blue}] text-white py-1 px-2 rounded-md text-md mr-2`}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
        <img
          src={"https://smoothcomp.com/img/hero.jpg"}
          className="absolute top-0 z-10 h-[100%] w-[100%] object-fill"
        />
      </div>
    </div>
  );
};

export default Account;
