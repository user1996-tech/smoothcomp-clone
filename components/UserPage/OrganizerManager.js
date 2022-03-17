import React from "react";
import { global } from "../../global";

const OrganizerManager = () => {
  return (
    <div className="text-white max-w-5xl mx-auto">
      <div className="px-3 py-5 space-y-10">
        <p className="uppercase font-bold text-3xl">Choose Organization</p>
        <p className="text-sm">
          Organizers can run their events using Smoothcamp.{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Learn more & get started
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default OrganizerManager;
