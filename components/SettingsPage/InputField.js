import React, { useState } from "react";

const InputFieldTest = ({ label, register, registerId }) => {
  const [editable, setEditable] = useState(false);
  const editableStyle = `focus:outline-blue-300 border-2`;
  const notEditableStyle = `outline-none`;
  return (
    <div className="py-2 px-10 border-b border-slate-300 grid grid-cols-1 md:grid-cols-4">
      <div className="flex-1 items-center flex">
        <p>{label}</p>
      </div>
      <div className="flex justify-between flex-1 items-center md:col-span-3">
        <input
          readOnly={!editable}
          {...register(registerId)}
          className={`w-full px-3 rounded-md mr-10 ${
            editable ? editableStyle : notEditableStyle
          }`}
        />

        {editable ? (
          <button
            className="text-green-400 hover:text-black h-10"
            onClick={() => setEditable(false)}
          >
            Done
          </button>
        ) : (
          <button
            className="text-blue-400 hover:text-black h-10"
            onClick={() => setEditable(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default InputFieldTest;
