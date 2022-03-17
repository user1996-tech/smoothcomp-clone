import React from "react";
import DropDownButton from "../DropDownButton";
import DropDownButton2 from "../DropDownButton2";
import DropDownButton3 from "../DropDownButton3";
import DropDownMenu from "../DropDownMenu";
import { global } from "../../global";

const Header = () => {
  return (
    <div className="">
      {/* First Row */}
      <div className="w-full h-10 bg-gray-700">
        {/* Desktop Menu  */}
        <div className="max-w-5xl mx-auto h-10 hidden sm:flex px-10 items-center justify-end md:justify-between">
          <div className="h-10 hidden md:flex">
            <DropDownButton
              title="Community"
              options={["Academies", "Affiliations", "Atheletes"]}
            />
            <DropDownButton2 />
            <DropDownButton3 />
          </div>

          <div className="">
            <img src={global.image.logo} alt="" className="h-4" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="h-10 flex items-center justify-between sm:hidden">
          <img src={global.image.logoafbjj} className="h-9" />

          <div className="flex items-center">
            <DropDownButton3 />
            <DropDownMenu />
          </div>
        </div>
      </div>

      {/* Image */}
      <img src={global.image.header} className="h-40 w-full" />
    </div>
  );
};

export default Header;
