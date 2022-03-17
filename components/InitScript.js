import React, { useEffect } from "react";
import { global } from "../global";
import { getCookie, setCookie } from "../public/global";
import { useRecoilState } from "recoil";
import { loginState } from "../recoil";

const InitScript = () => {
  const [loginId, setLoginId] = useRecoilState(loginState);

  useEffect(() => {
    const validateCookie = async (id) => {
      const isId = await fetch(`${global.apiAddress}/validateCookie`, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((data) => data.json())
        .then((result) => result);

      if (isId) {
        setLoginId(id);
        setCookie("loginId", id);
      }
    };

    const cookieLoginId = getCookie("loginId");
    // const cookieLoginId = "ItjMHSKSQslSWh10Ldpy";

    if (cookieLoginId != null) {
      const isId = validateCookie(cookieLoginId);
      //   console.log(isId);
    }
  }, []);

  return <></>;
};

export default InitScript;
