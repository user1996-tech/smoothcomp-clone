import { ConstructionOutlined } from "@mui/icons-material";
import { global } from "../global";

const getCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const setCookie = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const removeCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Han 1970 00:00:01 GMT;`;
};

const logout = (router, setState) => {
  setState(null);
  router.push("/");
  removeCookie("loginId");
};

const checkLoggedIn = async (setLoginId) => {
  const loginIdCookie = getCookie("loginId");

  if (loginIdCookie != null && loginIdCookie != "") {
    await fetch(`${global.apiAddress}/validateCookie`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LoginId: loginIdCookie,
      }),
    })
      .then((data) => data.json())
      .then((result) => {
        if (result.status) {
          setLoginId(loginIdCookie);
          setCookie("loginId", loginIdCookie);
        } else {
          removeCookie("loginId");
          setLoginId(null);
        }
      });
  }
};

const getUserData = async (loginId) => {
  if (loginId != null && loginId != "") {
    return await fetch(`${global.apiAddress}/getUserData`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LoginId: loginId,
      }),
    })
      .then((data) => data.json())
      .then((result) => {
        return result;
      });
  } else {
    //will run once
    console.log("no data to get");
  }
};

export {
  getCookie,
  setCookie,
  removeCookie,
  logout,
  checkLoggedIn,
  getUserData,
};
