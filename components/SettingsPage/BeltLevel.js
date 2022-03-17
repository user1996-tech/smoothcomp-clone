import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

const BeltLevel = () => {
  return (
    <div className="">
      <div
        className={`px-10 py-3 rounded-t-md bg-xgrey2 flex items-center justify-between`}
      >
        <p>Belt/Skill levels</p>
      </div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md flex items-center py-4 px-10">
        <button
          className={`bg-xblue text-white py-1 px-2 rounded-md flex items-center`}
        >
          <PlusIcon className="h-5 w-5 mx-1" />
          Add Belt/skill
        </button>
      </div>
    </div>
  );
};

export default BeltLevel;
