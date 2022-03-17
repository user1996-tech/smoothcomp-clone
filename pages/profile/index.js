import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/HomePage/Footer";
import { global } from "../../global";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import InitScript from "../../components/InitScript";
import { loginState } from "../../recoil";
import { useRecoilState } from "recoil";

const index = () => {
  const [loginId, setLoginId] = useRecoilState(loginState);
  return (
    <>
      <InitScript />
      <Header />

      <body className={`bg-[${global.colors.third}] min-h-screen`}>
        <div className="w-full h-[300px] text-white flex flex-col items-center justify-center space-y-4">
          <div className="flex justify-center">
            <p className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl">
              Austin Loh
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <p className="text-gray-500 uppercase">Nationality</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-gray-500 uppercase">Age</p>
              <p className="font-semibold text-xl">0</p>
            </div>

            <button className="uppercase text-gray-500 rounded-md py-1 px-2 text-sm border-[1px] flex items-center">
              <SettingsIcon className="h-4 w-4 mr-1" />
              settings
            </button>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default index;
