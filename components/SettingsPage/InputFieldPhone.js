import React, { useState, useEffect } from "react";
import FlagDropDownMenu from "./FlagDropDownMenu";

const InputFieldPhone = ({ initialValue, register, registerId }) => {
  // [areaCode, number] = initialValue
  const [value, setValue] = useState(initialValue[1]);
  const [areaCodeValue, setAreaCodeValue] = useState(initialValue[0]);
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";
    const getData = async (url) => {
      const apiData = await fetch(url)
        .then((data) => data.json())
        .then((result) => {
          // return result;
          setData(result);
        });
    };
    getData(url);
  }, []);
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex md:items-start">
        <p>Phone</p>
      </div>
      <div className="md:col-span-3">
        <div
          className={`flex items-center border-2 rounded-md max-w-[350px] ${
            focus ? "border-blue" : ""
          }`}
        >
          <FlagDropDownMenu
            options={data}
            selected=""
            register={register}
            state={areaCodeValue}
            setState={setAreaCodeValue}
          />
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="flex-1 px-3 flex mr-10 outline-none"
            type="tel"
            placeholder="050 123 4567"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>

        <p className="text-gray-500 text-xs">Please enter your mobile number</p>
        <p className="text-gray-500 text-xs">Ex. 050 123 4567</p>
        <input
          {...register(registerId)}
          hidden
          value={[areaCodeValue, value]}
        />
      </div>
    </div>
  );
};

export default InputFieldPhone;
