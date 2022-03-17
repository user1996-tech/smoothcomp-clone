import React from "react";
import { useRouter } from "next/router";

const Selector = ({ selected, options }) => {
  const router = useRouter();
  const selectedStyle = "text-black bg-white";
  const unselectedStyle = "text-white bg-black border border-color-white";
  const handleClick = (route) => {
    router.push(route);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg sm:mx-auto sm:w-full">
      {options.map((option, index) => {
        return (
          <div
            className={`${
              selected == option.label ? selectedStyle : unselectedStyle
            } 
            ${index == 0 ? "sm:rounded-l-md" : ""}
            ${index == options.length - 1 ? "sm:rounded-r-md" : ""}
            flex items-center justify-center my-1 py-2 cursor-pointer rounded-md sm:rounded-none`}
            onClick={() => handleClick(option.page)}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default Selector;
