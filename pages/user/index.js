import React from "react";
import { global } from "../../global";
import Header from "../../components/Header";
import Body from "../../components/UserPage/Body";
import Footer from "../../components/HomePage/Footer";

const index = () => {
  return (
    <div className="">
      <Header />

      <body className={`bg-[${global.colors.third}] min-h-screen`}>
        <Body />
      </body>

      <Footer />
    </div>
  );
};

export default index;
