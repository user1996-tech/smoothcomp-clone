import React, { useEffect, useState } from "react";
import { global } from "../../global";
import InputField from "./InputField";
import InputFieldPassword from "./InputFieldPassword";
import InputFieldSelectNationality from "./InputFieldSelectNationality";
import InputFieldSelectBirthdate from "./InputFieldSelectBirthdate";
import InputFieldSelectGender from "./InputFieldSelectGender";
import InputFieldSelectLanguage from "./InputFieldSelectLanguage";

const UserDetails = ({ register }) => {
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>User details</div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md">
        {/* Item */}
        <InputField
          label="First name"
          register={register}
          registerId="FirstName"
        />

        <InputField
          label="Middle name"
          register={register}
          registerId="MiddleName"
        />
        <InputField
          label="Last name"
          register={register}
          registerId="LastName"
        />

        <InputField label="Email" register={register} registerId="Email" />

        <InputFieldPassword
          label="Password"
          register={register}
          registerId="Password"
        />

        <InputFieldSelectNationality
          label="Nationality"
          register={register}
          registerId={"Nationality"}
        />

        <InputFieldSelectBirthdate
          label="Birthdate"
          initialValue={["", "", ""]}
          register={register}
          registerId={"Birthdate"}
        />

        <InputFieldSelectGender
          label="Gender"
          register={register}
          registerId={"Gender"}
        />

        <InputFieldSelectLanguage
          label="Language"
          register={register}
          registerId={"Language"}
        />
      </div>
    </div>
  );
};

export default UserDetails;
