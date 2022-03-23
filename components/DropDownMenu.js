import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";
import { loginState } from "../recoil";
import { useRecoilState } from "recoil";
import { logout } from "../public/global";

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

const options2 = [
  {
    title: "Events",
    options: [
      {
        title: "Upcoming events",
      },
      {
        title: "Past events",
      },
      {
        title: "Your events",
      },
    ],
  },
  {
    title: "Community",
    options: [
      {
        title: "Academies",
      },
      {
        title: "Affiliations",
      },
      {
        title: "Athletes",
      },
    ],
  },
  {
    title: "About",
    options: [
      {
        title: "Features & pricing",
      },
      {
        title: "About Smoothcomp",
      },
      {
        title: "Federation Platform",
      },
      {
        title: "Support",
      },
    ],
  },
];

const DropDownMenu = () => {
  const [status, setStatus] = useState(false);
  const [loginId, setLoginId] = useRecoilState(loginState);
  const router = useRouter();
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <div className="relative z-50">
      <button
        className="px-5 h-10 flex items-center hover:bg-black"
        onClick={handleClick}
      >
        <MenuIcon className="h-5 w-5 text-white" />
      </button>

      {status && (
        <div className="absolute top-10 right-0 w-screen bg-gray-900 ">
          <div className="uppercase w-[50%] h-10 font-bold text-sm bg-gray-700 flex items-center px-10 mt-3 text-gray-500">
            Account
          </div>
          <div className="grid grid-cols-2">
            {loginId == null ? (
              <>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() => router.push("/login")}
                >
                  Log in
                </button>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() =>
                    router.push({
                      pathname: "/register",
                      query: { name: "something" },
                    })
                  }
                >
                  Create account
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() => router.push("/login")}
                >
                  Austin Loh
                </button>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() => router.push("/user")}
                >
                  My account
                </button>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() => router.push("/settings")}
                >
                  Settings
                </button>
                <button
                  className="text-white h-10 bg flex items-center px-10 hover:bg-black border border-slate-500"
                  onClick={() => logout(router, setLoginId)}
                >
                  Log out
                </button>
              </>
            )}
          </div>

          {options2.map((group, index) => {
            return (
              <div key={index}>
                <div className="uppercase w-full h-10 font-bold text-sm bg-gray-700 flex items-center px-10 mt-3 text-gray-500">
                  {group.title}
                </div>
                <div className="divide-y divide-slate-500 border-[1px] border-slate-500">
                  {group.options.map((option, index) => (
                    <button
                      className="text-white w-full h-10 bg flex items-center px-10 hover:bg-black"
                      key={index}
                    >
                      {option.title}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          {/* <div className="uppercase w-full h-10 bg-gray-700 flex items-center px-5 mt-3 text-gray-500">
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
          </button> */}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
