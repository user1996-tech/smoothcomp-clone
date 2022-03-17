import React from "react";
import DropDownButton from "./DropDownButton";
import DropDownButton2 from "./DropDownButton2";
import DropDownButton3 from "./DropDownButton3";
import DropDownMenu from "./DropDownMenu";
import { global } from "../global";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="">
      {/* First Row */}
      <div className="w-full bg-gray-700">
        {/* Desktop Menu  */}
        <div className="max-w-5xl h-15 mx-auto hidden sm:flex px-3 items-center justify-end md:justify-between">
          <div className="h-15 cursor-pointer" onClick={handleClick}>
            <img src={global.image.logo} alt="" className="h-6 my-2" />
          </div>

          <div className="h-full hidden md:flex items-stretch divide-x divide-[#28292A]">
            <DropDownButton title="Events" alone={true} />
            <DropDownButton
              title="About"
              options={[
                "Features & pricing",
                "About Smoothcomp",
                "Federation Platform",
                "Support",
              ]}
            />
            <DropDownButton
              title="Community"
              options={["Academies", "Affiliations", "Atheletes"]}
            />
            <DropDownButton2 />
            <DropDownButton3 />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="h-15 flex items-center justify-between sm:hidden pl-5">
          <img
            src={global.image.logo}
            className="h-6 cursor-pointer"
            onClick={handleClick}
          />

          <div className="flex items-center divide-x divide-[#28292A]">
            <DropDownButton3 />
            <DropDownMenu />
          </div>
        </div>
      </div>

      {/* Image
      <img src={global.image.header} className="h-40 w-full" /> */}
    </div>
  );
};

export default Header;
