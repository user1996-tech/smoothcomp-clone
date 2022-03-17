import React, { useState, useEffect } from "react";
import { global } from "../../global";
import Selector from "./Selector";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(global.userOptions[0]);

  useEffect(() => {
    if (router.query.selected != undefined) {
      let temp = global.userOptions.filter((option) => {
        return option.title == router.query.selected;
      })[0];
      if (temp == undefined) {
        temp = options[0];
      }

      setSelected(temp);
    }
  }, [router.query]);

  return (
    <div className="text-white py-10">
      <Selector
        options={global.userOptions}
        selected={selected}
        setSelected={setSelected}
      />

      {/* Page */}
      <div className="my-10">{selected.page()}</div>
    </div>
  );
};

export default Body;
