import React, { useRef, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";

const CoverImage = ({ register, registerId, initialValue }) => {
  const filePickerRef = useRef(null);
  const [image, setImage] = useState(initialValue);
  const handleImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };
  return (
    <div className="">
      <div
        className={`px-10 py-3 rounded-t-md bg-xgrey2 flex items-center justify-between`}
      >
        <p>Cover image</p>

        <input
          hidden
          type="file"
          ref={filePickerRef}
          onChange={(e) => handleImage(e)}
          {...register(registerId)}
        />
        <button
          className={`bg-xblue text-white py-1 px-2 text-sm rounded-md font-semibold`}
          onClick={() => filePickerRef.current.click()}
        >
          Select image
        </button>
      </div>
      <div className="bg-white divide-y divide-slate-300 border-t border-b border-slate-300 rounded-b-md flex items-center justify-center py-4">
        {image ? (
          <img
            src={image}
            alt=""
            className="bg-white text-gray-500 h-[150px] w-[150px]"
          />
        ) : (
          <PhotographIcon className="bg-white text-gray-500 h-[150px] w-[150px]" />
        )}
      </div>
    </div>
  );
};

export default CoverImage;
