import React from "react";
import { global } from "../../global";

const Title = () => {
  return (
    <div className="text-white flex justify-between items-center py-10">
      <p className="uppercase text-3xl font-bold text-wrap">profile settings</p>

      <div className="space-x-2 flex-nowrap flex">
        <button
          className={`bg-[${global.colors.blue}] text-white py-1 px-2 rounded-md whitespace-nowrap`}
        >
          My Profile
        </button>
        <button
          className={`bg-[${global.colors.blue}] text-white py-1 px-2 rounded-md whitespace-nowrap`}
        >
          Shared user data
        </button>
      </div>
    </div>
  );
};

export default Title;
