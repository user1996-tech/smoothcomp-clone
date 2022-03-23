import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import countryCodes from "../../public/countryCodes";
import { userDataState } from "../../recoil";
import { useRecoilState } from "recoil";

const FlagDropDownMenu = ({ options = [], register, setValue }) => {
  const [userData, setUserData] = useRecoilState(userDataState);

  // console.log("flag component");
  // console.log(userData);
  // const [selected, setSelected] = useState(null);
  const [state, setState] = useState(null);
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };

  useEffect(() => {
    const result = options.filter((obj) => {
      return obj.callingCodes[0] == userData.data.PhoneNumberCallingCode;
    })[0];

    setState(result);
  }, [options, userData]);

  return (
    <div className="">
      <div className="flex relative items-center hover:bg-xgrey2 p-1">
        <button
          type="button"
          className="flex items-center"
          onClick={handleClick}
        >
          {state && <img src={state?.flags?.png} className="w-5 h-3 mr-1" />}
          <ChevronDownIcon className="w-5 h-5" />
        </button>
        {status && (
          <div className="absolute left-[-1px] top-[100%] bg-white w-[200px] h-[300px] border-2 overflow-y-scroll">
            {options.map((country) => {
              return (
                <button
                  key={country.name}
                  onClick={() => {
                    setState(country);
                    setStatus(false);
                    console.log(country.callingCodes[0]);
                    setValue("PhoneNumberCallingCode", country.callingCodes[0]);
                  }}
                  className={`flex items-center hover:bg-xgrey2 w-full text-left py-2 ${
                    state?.name == country.name ? "bg-xgrey2" : ""
                  }`}
                >
                  <img src={country.flags.png} className="w-5 h-3 mr-1 " />
                  <p>{country.name}</p>
                  <p className="text-gray-500"> +{country.callingCodes[0]}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlagDropDownMenu;
