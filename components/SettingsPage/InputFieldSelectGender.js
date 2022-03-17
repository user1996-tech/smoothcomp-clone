import React, { useState, useEffect } from "react";

const options = ["Male", "Female"];

const InputFieldSelectGender = ({
  label = "",
  initialValue = "",
  register,
  registerId,
}) => {
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>Gender</p>
      </div>
      <div className="flex flex-col justify-between flex-1 items-center space-y-2 md:col-span-3">
        <select
          className="w-full rounded-md border-2 p-1"
          {...register(registerId)}
          defaultValue={initialValue}
        >
          <option value="">Select gender</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputFieldSelectGender;
