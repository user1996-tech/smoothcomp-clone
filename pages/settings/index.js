import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/HomePage/Footer";
import { global } from "../../global";
import { checkLoggedIn, getUserData } from "../../public/global";
import InitScript from "../../components/InitScript";
import Selector from "../../components/UserPage/Selector";
import { useRouter } from "next/router";
import Title from "../../components/SettingsPage/Title";
import YourAcademies from "../../components/SettingsPage/YourAcademies";
import JoinAcademy from "../../components/SettingsPage/JoinAcademy";
import LinkedAccounts from "../../components/SettingsPage/LinkedAccounts";
import { loginState } from "../../recoil";
import { userDataState } from "../../recoil";
import { useRecoilState } from "recoil";
import { useThemeWithoutDefault } from "@mui/system";
import Form from "../../components/SettingsPage/Form";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  // const [userData, setUserData] = useState(undefined);
  const [userData, setUserData] = useRecoilState(userDataState);
  const router = useRouter();
  const [loginId, setLoginId] = useRecoilState(loginState);

  useEffect(() => {
    checkLoggedIn(setLoginId);
  });

  useEffect(() => {
    if (Object.keys(router.query).length != 0) {
      if (router.query.type == "error") {
        toast.error(router.query.message);
      } else {
        toast.success(router.query.message);
      }
    }
  }, [router.query]);

  useEffect(() => {
    (async () => {
      const response = await getUserData(loginId);
      setUserData(response);
    })();
  }, [loginId]);
  return (
    <>
      <InitScript />
      <Header />
      <div className={`bg-[${global.colors.third}] min-h-screen px-2`}>
        {/* <div className="my-10">
          <Selector options={global.userOptions} selected={""} route={true} />
        </div> */}

        <div className="mx-auto max-w-5xl px-5">
          {/* Title */}
          <Title />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-[100px]">
            <div className="lg:col-span-2">
              {userData == undefined ? (
                <div className="flex items-center justify-center border-slate-500 rounded-md border py-[200px]">
                  <ThreeDots color="grey" className="" height={50} width={50} />
                </div>
              ) : (
                <Form userData={userData} />
              )}
            </div>

            <div className="space-y-8">
              {/* Your academies */}
              <YourAcademies />

              {/* Join Academy */}
              <JoinAcademy />

              {/* Linked accounts */}
              <LinkedAccounts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default index;
