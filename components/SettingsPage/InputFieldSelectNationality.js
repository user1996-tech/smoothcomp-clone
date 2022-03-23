import React, { useState, useEffect } from "react";
import countryInfo from "../../public/countryInfo";

const InputFieldSelectNationality = ({ label, register, registerId }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const url = "https://restcountries.com/v2/all";
  //   const getData = async (url) => {
  //     await fetch(url)
  //       .then((data) => data.json())
  //       .then((result) => {
  //         setData(result);
  //       });
  //   };
  //   getData(url);
  // }, []);

  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <div className="flex justify-between flex-1 items-center md:col-span-3">
        <select
          className="w-full rounded-md border-2 p-1"
          {...register(registerId)}
        >
          <option value="">Select country</option>
          {countryInfo.map((country) => {
            return (
              <option key={country.alpha3Code} value={country.alpha3Code}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputFieldSelectNationality;
