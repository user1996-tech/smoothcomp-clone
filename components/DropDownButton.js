import React, { useState } from "react";
import ChevronDown from "@heroicons/react/solid/ChevronDownIcon";

const DropDownButton = ({ title, options, alone = false }) => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div className="relative text-white text-sm hover:bg-black">
      <div
        onClick={handleClick}
        className={`flex h-full items-center px-5 ${
          status ? "bg-gray-900" : "bg-transparent"
        }`}
      >
        <h1>{title}</h1>
        {!alone && <ChevronDown className="h-5 w-7" />}
      </div>

      {status && !alone && (
        <div className="absolute z-10 top-[100%] left-0 w-[200px] bg-gray-900">
          {options.map((option) => (
            <div className="h-10 flex items-center hover:bg-black pl-5">
              <h1>{option}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
