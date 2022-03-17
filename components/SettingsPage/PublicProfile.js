import React, { useState } from "react";
import { Switch } from "@mui/material";

const PublicProfile = ({ initialValue, register, registerId }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>Public Profile</div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md">
        <div className="py-2 px-10 border-b border-slate-300">
          <div className="flex items-center">
            <Switch
              checked={value}
              onChange={(e) => setValue(e.target.checked)}
            />
            <p className="text-sm">Hide public profile</p>
          </div>
          <p className="text-xs">
            This setting hides your public profile page, however your name will
            still show up in the results list of events that you have
            participated in.
          </p>
        </div>
      </div>
      <input hidden {...register(registerId)} value={value} />
    </div>
  );
};

export default PublicProfile;
