import React from "react";
import Banner from "./Banner";
import For from "./For";
import Upcoming from "./Upcoming";
import Features from "./Features";

const Body = () => {
  return (
    <div className="">
      {/* Banner  */}
      <Banner />
      {/* For */}
      <For />
      {/* Upcoming */}
      <Upcoming />
      {/* Features */}
      <Features />
    </div>
  );
};

export default Body;
