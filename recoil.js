import { atom } from "recoil";

const loginState = atom({
  key: "loginState",
  default: null,
});

const userDataState = atom({
  key: "userData",
  default: {},
});

export { loginState, userDataState };
