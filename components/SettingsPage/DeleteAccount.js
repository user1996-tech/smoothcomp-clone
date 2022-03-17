import React from "react";

const DeleteAccount = () => {
  return (
    <div className="">
      <div
        className={`px-10 py-3 rounded-t-md bg-xgrey2 flex items-center justify-between`}
      >
        <p>Delete Account</p>
      </div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md flex items-center py-4 px-10">
        <button
          className={`text-xred border border-xred py-1 px-2 rounded-md flex items-center`}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
