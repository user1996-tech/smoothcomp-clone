import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { loginState } from "../recoil";
import { useRecoilState } from "recoil";
import { logout } from "../global";

const rows = [
  "Home",
  "Events",
  "Membership",
  "News",
  "Information",
  "Ranking",
  "Ranking history 2014-2018",
  "Account",
];

const DropDownMenu = () => {
  const [status, setStatus] = useState(false);
  const [loginId, setLoginId] = useRecoilState(loginState);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <div className="relative z-50">
      <div
        className="px-5 h-10 flex items-center hover:bg-black"
        onClick={handleClick}
      >
        <MenuIcon className="h-5 w-5 text-white" />
      </div>

      {status && (
        <div className="absolute top-10 right-0 w-screen bg-gray-900 ">
          <div className="uppercase text-white w-full h-10 bg-gray-700 flex items-center px-5 mt-3">
            abjff
          </div>
          {rows.map((row) => (
            <button className="text-white w-full h-10 bg flex items-center px-5 hover:bg-black">
              {row}
            </button>
          ))}

          <div className="grid grid-cols-2">
            <button className="text-white h-10 bg flex items-center px-5 hover:bg-black">
              Austin Loh
            </button>
            <button className="text-white h-10 bg flex items-center px-5 hover:bg-black">
              My account
            </button>
            <button className="text-white h-10 bg flex items-center px-5 hover:bg-black">
              Settings
            </button>
            <button
              className="text-white h-10 bg flex items-center px-5 hover:bg-black"
              onClick={() => logout(router, setLoginId)}
            >
              Log out
            </button>
          </div>

          <div className="uppercase w-full h-10 bg-gray-700 flex items-center px-5 mt-3 text-gray-500">
            linked profiles
          </div>
          <div className="h-10 flex items-center text-gray-500 px-5">
            <AccountCircleIcon className="mr-2" />
            <h1>Austin Loh</h1>
          </div>
          <button className="h-10 flex items-center hover:bg-black px-5 text-white">
            <PersonIcon className="mr-2" />
            <h1>Manage profiles</h1>
          </button>

          <div className="uppercase w-full h-10 bg-gray-700 flex items-center px-5 mt-3 text-gray-500">
            community
          </div>
          <button className="text-white w-full h-10 bg flex items-center px-5 hover:bg-black">
            Academies
          </button>
          <button className="text-white w-full h-10 bg flex items-center px-5 hover:bg-black">
            Affiliations
          </button>
          <button className="text-white w-full h-10 bg flex items-center px-5 hover:bg-black">
            Athletes
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
