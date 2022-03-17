import React, { useState } from "react";

const InputField = ({
  label,
  initialValue,
  register,
  registerId,
  encrypted = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const [editable, setEditable] = useState(false);
  const asteric = "*";
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <div className="flex justify-between flex-1 items-center md:col-span-3">
        {editable ? (
          <>
            <input
              value={value}
              type={`${encrypted ? "password" : "text"}`}
              onChange={(e) => {
                console.log(value);
                setValue(e.target.value);
              }}
              className="w-full px-3 focus:outline-blue-300 rounded-md border-2 mr-10"
            />
            <button
              className="text-green-400 hover:text-black h-10"
              onClick={() => setEditable(false)}
            >
              Done
            </button>
          </>
        ) : (
          <>
            {value == "" ? (
              <input
                value={value}
                type={`${encrypted ? "password" : "text"}`}
                className="w-full px-3 focus:outline-blue-300 rounded-md border-2 mr-10"
              />
            ) : (
              <p>{encrypted ? asteric.repeat(value.length) : value}</p>
            )}
            <button
              className="text-blue-400 hover:text-black h-10"
              onClick={() => setEditable(true)}
            >
              Edit
            </button>
          </>
        )}
      </div>
      <input {...register(registerId)} value={value} hidden />
    </div>
  );
};

export default InputField;
