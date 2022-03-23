import React, { useEffect, useState } from "react";
import { global } from "../../global";
import UserDetails from "../../components/SettingsPage/UserDetails";
import ContactResidence from "../../components/SettingsPage/ContactResidence";
import PublicProfile from "../../components/SettingsPage/PublicProfile";
import ProfileImage from "../../components/SettingsPage/ProfileImage";
import CoverImage from "../../components/SettingsPage/CoverImage";
import BeltLevel from "../../components/SettingsPage/BeltLevel";
import DeleteAccount from "../../components/SettingsPage/DeleteAccount";
import { useForm } from "react-hook-form";
import { loginState } from "../../recoil";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Form = ({ userData }) => {
  const [loginId, setLoginId] = useRecoilState(loginState);
  const router = useRouter();
  // console.log(userData.data);
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
      ...userData?.data,
    },
  });

  // useEffect(() => {
  //   // console.log(userData.data.Nationality);
  //   setTimeout(() => {
  //     // setValue("Nationality", "HKG");
  //     reset();
  //   }, 5000);
  // }, [userData]);

  const onSubmit = async (data) => {
    console.log(data);
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
      .then((result) => {
        console.log("results");
        console.log(result);
        if (result.message != "") {
          router.push({
            pathname: "/settings",
            query: { message: result.message, type: result.status },
          });
        }
      });
  };

  return (
    <>
      {userData == undefined ? (
        <>Loading</>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* User Details */}
          <UserDetails register={register} />

          {/* Contact & residence */}
          <ContactResidence register={register} setValue={setValue} />

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
            className="bg-xgreen text-white text-lg my-3 p-3 rounded-md"
            type="submit"
          >
            Save changes
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
