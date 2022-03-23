import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const options = [
  {
    languange: "English",
    flags: ["US", "GB"],
  },
  {
    languange: "Portugues",
    flags: ["PT", "BR"],
  },
  {
    languange: "Portugues",
    flags: ["PT", "BR"],
  },
  {
    languange: "Espanol",
    flags: ["MX", "ES"],
  },
  {
    languange: "Nederlands",
    flags: ["NL"],
  },
  {
    languange: "Francais",
    flags: ["FR"],
  },
];

const DropDownButton3 = () => {
  const [selected, setSelected] = useState("US");
  const [status, setStatus] = useState(false);
  const handleClick = (countryCode) => {
    setSelected(countryCode);
    setStatus(false);
  };
  return (
    <div className="relative">
      <button
        className="px-5 h-10 flex items-center hover:bg-black"
        onClick={() => {
          setStatus(!status);
        }}
      >
        <ReactCountryFlag countryCode={selected} svg />
      </button>

      {status && (
        <div className="absolute z-10 top-10 right-0 w-[200px] bg-gray-900">
          {options.map((option, index) => (
            <div
              key={index}
              className="h-10 flex items-center hover:bg-black px-5 justify-between"
              onClick={() => handleClick(option.flags[0])}
            >
              <h1 className="text-white">{option.languange}</h1>
              <div className="space-x-2">
                {option.flags.map((flag) => (
                  <ReactCountryFlag key={flag} countryCode={flag} svg />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton3;
