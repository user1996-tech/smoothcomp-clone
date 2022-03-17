import React from "react";
import { useRouter } from "next/router";

const Selector = ({ options, selected, setSelected, route = false }) => {
  const router = useRouter();
  return (
    <div>
      {/* Mobile Version */}
      <div className="space-y-2 md:hidden px-3 text-white">
        {options.map((option) => (
          <button
            onClick={() => {
              if (!route) {
                setSelected(option);
              } else {
                router.push(option.route);
              }
            }}
            className={`w-full border-white rounded-md border py-2 flex items-center justify-center ${
              selected.title == option.title ? "bg-white text-black" : ""
            }`}
          >
            {option.icon()}
            <p className="pl-2">{option.title}</p>
          </button>
        ))}
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex max-w-5xl mx-auto px-3 text-white">
        {options.map((option, index) => (
          <button
            onClick={() => {
              if (!route) {
                setSelected(option);
              } else {
                router.push(option.route);
              }
            }}
            className={`w-full border-white border py-2 flex items-center justify-center ${
              selected.title == option.title ? "bg-white text-black" : ""
            }
            ${index == 0 ? "rounded-l-md" : ""} 
            ${index == options.length - 1 ? "rounded-r-md" : ""}
            `}
          >
            {option.icon()}
            <p className="pl-2">{option.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
