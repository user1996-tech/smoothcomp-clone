import React, { useState, useEffect } from "react";

const range = (start, end, reverse = false) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => (reverse ? end - idx : start + idx));
};
const optionsDay = range(1, 31);

const optionsMonth = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const optionsYear = range(1900, 2022, true);

const InputFieldSelectBirthdate = ({
  label,
  initialValue,
  register,
  registerId,
}) => {
  // ["Day", "Month", "Year"]
  const [dayValue, setDayValue] = useState(initialValue[0]);
  const [monthValue, setMonthValue] = useState(initialValue[1]);
  const [yearValue, setYearValue] = useState(initialValue[2]);

  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <div className="flex flex-col justify-between flex-1 items-center space-y-2 md:col-span-3 md:flex-row md:space-y-0">
        {/* Day */}
        <select
          className="w-full md:w-[30%]  rounded-md border-2 p-1"
          {...register("BirthdateDay")}
        >
          <option value="">Day</option>
          {optionsDay.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          className="w-full md:w-[30%] rounded-md border-2 p-1"
          {...register("BirthdateMonth")}
        >
          <option value="">Month</option>
          {optionsMonth.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          className="w-full md:w-[30%] rounded-md border-2 p-1"
          {...register("BirthdateYear")}
        >
          <option value="">Year</option>
          {optionsYear.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputFieldSelectBirthdate;
