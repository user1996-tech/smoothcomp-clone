import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/HomePage/Footer";
import { global } from "../../global";
import { checkLoggedIn, getUserData } from "../../public/global";
import InitScript from "../../components/InitScript";
import Selector from "../../components/UserPage/Selector";
import { useRouter } from "next/router";
import Title from "../../components/SettingsPage/Title";
import UserDetails from "../../components/SettingsPage/UserDetails";
import { useForm } from "react-hook-form";
import ContactResidence from "../../components/SettingsPage/ContactResidence";
import PublicProfile from "../../components/SettingsPage/PublicProfile";
import ProfileImage from "../../components/SettingsPage/ProfileImage";
import CoverImage from "../../components/SettingsPage/CoverImage";
import BeltLevel from "../../components/SettingsPage/BeltLevel";
import DeleteAccount from "../../components/SettingsPage/DeleteAccount";
import YourAcademies from "../../components/SettingsPage/YourAcademies";
import JoinAcademy from "../../components/SettingsPage/JoinAcademy";
import LinkedAccounts from "../../components/SettingsPage/LinkedAccounts";
import { loginState } from "../../recoil";
import { useRecoilState } from "recoil";
import { useThemeWithoutDefault } from "@mui/system";

const index = () => {
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm({
    shouldFocusError: false,
    defaultValues: {
      // FirstName: "Austin test",
      // MiddleName: "",
      // LastName: "Lohx",
      // Password: "hiddenpassword",
      // ...userData,
    },
  });
  const [loginId, setLoginId] = useRecoilState(loginState);
  const onSubmit = async (data) => {
    console.log(getValues());
    await fetch(`${global.apiAddress}/updateProfile`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        LoginId: loginId,
      }),
    })
      .then((data) => data.json())
      .then((result) => {});
  };

  useEffect(() => {
    checkLoggedIn(setLoginId);
  });

  useEffect(() => {
    (async () => {
      const response = await getUserData(loginId);
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
            {/* User Details */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <UserDetails register={register} setValue={setValue} />

                {/* Contact & residence */}
                <ContactResidence register={register} />

                {/* Public Profile */}
                <PublicProfile
                  register={register}
                  registerId="PublicProfile"
                  initialValue={true}
                />

                {/* Profile Image */}
                <ProfileImage
                  register={register}
                  registerId="ProfileImage"
                  initialValue=""
                />

                {/* Cover Image */}
                <CoverImage
                  register={register}
                  registerId="CoverImage"
                  initialValue=""
                />

                {/* Belt / Skill levels */}
                <BeltLevel />

                {/* Delete Account */}
                <DeleteAccount />

                <button
                  className="bg-xgreen text-white text-lg font-semibold my-3 p-3 rounded-md"
                  type="submit"
                >
                  Save changes
                </button>
              </form>
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
    </>
  );
};

export default index;
