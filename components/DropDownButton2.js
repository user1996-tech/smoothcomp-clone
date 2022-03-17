import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { loginState } from "../recoil";
import { useRouter } from "next/router";
import { global, logout } from "../global";

const DropDownButton2 = () => {
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const [loginId, setLoginId] = useRecoilState(loginState);
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div className="relative text-white text-sm">
      {loginId == null ? (
        <div className="h-full flex items-center px-2 space-x-2">
          <button
            className={`bg-[${global.colors.blue}] text-white rounded-md py-1 px-2 hover:bg-blue-600`}
            onClick={() => router.push("/login")}
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/register")}
            className={`bg-[#8D9799] text-white rounded-md py-1 px-2 hover:bg-gray-600`}
          >
            Create account
          </button>
        </div>
      ) : (
        <>
          <div
            onClick={handleClick}
            className={`flex h-full items-center px-5 hover:bg-gray-900 ${
              status ? "bg-gray-900" : "bg-transparent"
            }`}
          >
            <AccountCircleIcon className="mr-2" />
            <h1>Austin</h1>
            <ChevronDownIcon className="h-5 w-7" />
          </div>

          {status && (
            <div className="absolute z-10 top-10 left-0 w-[200px] bg-gray-900">
              <div className="h-10 flex items-center hover:bg-black pl-5">
                <AccountCircleIcon className="mr-2" />
                <h1>Austin Loh</h1>
              </div>
              <div className="h-10 flex items-center hover:bg-black pl-5">
                <PersonIcon className="mr-2" />
                <h1>My account</h1>
              </div>
              <div className="h-10 flex items-center hover:bg-black pl-5">
                <SettingsIcon className="mr-2" />
                <h1>Settings</h1>
              </div>
              <div
                className="h-10 flex items-center hover:bg-black pl-5"
                onClick={() => logout(router, setLoginId)}
              >
                <ChevronRightIcon className="mr-2" />
                <h1>Log out</h1>
              </div>

              <div className="h-10 flex items-center text-gray-500 mt-3 pl-5">
                <h1 className="uppercase">linked profiles</h1>
              </div>
              <div className="h-10 flex items-center text-gray-500 pl-5 hover:bg-black hover:text-white">
                <AccountCircleIcon className="mr-2" />
                <h1>Austin Loh</h1>
              </div>
              <div className="h-10 flex items-center hover:bg-black pl-5">
                <PersonIcon className="mr-2" />
                <h1>Manage profiles</h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DropDownButton2;
