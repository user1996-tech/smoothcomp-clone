import React from "react";

const InputFieldTextArea = ({ register, registerId, initialValue, label }) => {
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <div className="md:col-span-3">
        <input
          {...register(registerId)}
          defaultValue={initialValue}
          className="w-full px-3 focus:outline-blue-300 rounded-md border-2 mr-10"
        />
      </div>
    </div>
  );
};

export default InputFieldTextArea;
