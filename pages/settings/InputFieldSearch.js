import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const InputFieldSearch = () => {
  const [status, setStatus] = useState(false);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    setStatus(!status);
  };
  return (
    <div
      className="flex items-center w-full justify-between border-2 rounded-md relative px-2 py-1"
      onClick={handleClick}
    >
      <input
        type="text"
        className="outline-none"
        placeholder="Search..."
        ref={inputRef}
      />
      <button>
        <ChevronDownIcon className="w-5 h-5 text-xgrey" />
      </button>

      {status && (
        <div className="absolute top-[100%] bg-white right-[-2px] left-[-2px] border rounded-md">
          <div className="px-4 py-1 text-sm">
            <p>List is empty.</p>
          </div>
          <div className="px-4 py-1 text-xblue bg-blue-200 hover:bg-blue-300 cursor-pointer text-sm">
            <p>Search for more</p>
          </div>
          <div className="px-4 py-3 flex items-center justify-between text-sm bg-gray-200">
            <p className="text-xgrey">Can't find your academy ?</p>
            <button className="text-xs bg-xblue text-white py-1 px-2 rounded-md ">
              Register new
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputFieldSearch;
