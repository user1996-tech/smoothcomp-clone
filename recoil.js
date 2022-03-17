import { atom } from "recoil";

const loginState = atom({
  key: "loginState",
  default: null,
});

const userData = atom({
  key: "userData",
  default: {},
});

export { loginState, userData };
