import React from "react";

const InputFieldTextArea = ({ register, registerId, initialValue, label }) => {
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <textarea
        defaultValue={initialValue}
        rows={2}
        {...register(registerId)}
        className="w-full px-3 focus:outline-blue-300 rounded-md border-2 mr-10 py-2 md:col-span-3"
      />
    </div>
  );
};

export default InputFieldTextArea;
