import React from "react";
import { global } from "../../global";
import FacebookIcon from "../../public/FacebookIcon";
import InstagramIcon from "../../public/InstagramIcon";
import YoutubeIcon from "../../public/YoutubeIcon";

const Footer = () => {
  return (
    <footer className={`text-white px-3  py-10 bg-[${global.colors.fourth}]`}>
      <div className="md:max-w-sm md:mx-auto flex flex-col items-center space-y-3">
        <div className="">
          <p className="text-sm font-semibold text-center">
            Smoothcomp is a tournament software for combat sports. The smoothest
            way to participate, organize and follow competitions. See you on the
            mat!
          </p>
        </div>

        <div className="flex items-center space-x-1">
          <button className={`p-2 bg-[${global.colors.blue}] rounded-md`}>
            <FacebookIcon className="" />
          </button>
          <button className={`p-2 bg-[#DC854B] rounded-md`}>
            <InstagramIcon className="" />
          </button>
          <button className={`p-2 bg-[#C24444] rounded-md`}>
            <YoutubeIcon className="" />
          </button>
          <button className="p-1 rounded-md text-xs font-semibold text-gray-500 border border-gray-500 hover:border-gray-700 hover:text-gray-700">
            Get support
          </button>
          <button className="p-1 rounded-md text-xs font-semibold text-gray-500 border border-gray-500 hover:border-gray-700 hover:text-gray-700">
            Terms of Service
          </button>
          <button className="p-1 rounded-md text-xs font-semibold text-gray-500 border border-gray-500 hover:border-gray-700 hover:text-gray-700">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
