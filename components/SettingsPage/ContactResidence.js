import React from "react";
import InputFieldPhone from "./InputFieldPhone";
import InputFieldTextArea from "./InputFieldTextArea";
import InputFieldText from "./InputFieldText";
import InputFieldSelectNationality from "./InputFieldSelectNationality";

const ContactResidence = ({ register }) => {
  return (
    <div className="">
      <div className={`px-10 py-3 rounded-t-md bg-xgrey2`}>
        Contact & residence
      </div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md">
        <InputFieldPhone
          register={register}
          registerId="PhoneNumber"
          initialValue={["", ""]}
        />

        <InputFieldTextArea
          register={register}
          registerId="Address"
          initialValue=""
          label="Address"
        />

        <InputFieldText
          register={register}
          registerId="Zip"
          initialValue=""
          label="Zip"
        />

        <InputFieldText
          register={register}
          registerId="State"
          initialValue=""
          label="Province/State"
        />

        <InputFieldSelectNationality
          label="Country of residence"
          initialValue={"ARE"}
          register={register}
          registerId={"CountryOfResidence"}
        />
      </div>
    </div>
  );
};

export default ContactResidence;
