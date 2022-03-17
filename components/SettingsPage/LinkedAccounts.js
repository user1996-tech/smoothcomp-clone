import React from "react";

const LinkedAccounts = () => {
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>Linked accounts</div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md px-10 py-2">
        <button className="bg-xgreen text-white text-sm py-2 px-3 rounded-md hover:bg-green-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default LinkedAccounts;
