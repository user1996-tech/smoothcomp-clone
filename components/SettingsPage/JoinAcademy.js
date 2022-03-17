import React from "react";
import InputFieldSearch from "../../pages/settings/InputFieldSearch";

const JoinAcademy = () => {
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>Join academy</div>
      <div className="bg-white border-t border-b border-slate-300 px-10 py-5 space-y-3">
        <p>Academy</p>
        <InputFieldSearch />
        <p>Affiliation/Team</p>
        <p>No team/association</p>
      </div>
      <div className={`px-10 py-2 rounded-b-md bg-xgrey2`}>
        <button className="bg-xgreen text-white text-sm py-2 px-3 rounded-md hover:bg-green-600">
          Join academy
        </button>
      </div>
    </div>
  );
};

export default JoinAcademy;
