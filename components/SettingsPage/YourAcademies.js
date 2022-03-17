import React from "react";

const YourAcademies = () => {
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>Your academies</div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md px-10 py-5">
        <p className="text-xs">
          At this section you can set which academy or (in some cases) which
          academies that you represent. By adding an academy to this list you
          accpt that the resposible coach of that academy have the right to
          handle your application/cancellation and payment/refund to any
          competition within Smoothcomp
        </p>
      </div>
    </div>
  );
};

export default YourAcademies;
