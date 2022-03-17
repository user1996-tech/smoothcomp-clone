import React, { useState, useEffect } from "react";
import Selector from "../../components/Selector";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { global } from "../../global";
import { setCookie } from "../../public/global";
import { useForm } from "react-hook-form";
import { loginState } from "../../recoil";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const router = useRouter();
  const [loginId, setLoginId] = useRecoilState(loginState);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const login = async ({ Email, Password }) => {
    const res = await fetch(`${global.apiAddress}/login`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: Email,
        Password: Password,
      }),
    })
      .then((data) => data.json())
      .then((result) => {
        if (result.status == "success") {
          reset();
          setErrorMessage("");
          setLoginId(result.loginId);
          setCookie("loginId", result.loginId);
          router.push("/");
        } else {
          reset();
          setErrorMessage(result.message);
        }
      });
  };

  useEffect(() => {
    if (Object.keys(router.query).length != 0) {
      toast.success(router.query.message);
    }
  }, [router.query]);

  return (
    <>
      <Header />

      <body>
        <div
          className={`bg-[${global.colors.primary}] px-1 py-10 min-h-screen flex flex-col`}
        >
          <Selector options={global.loginOptions} selected="Log In" />

          <form
            onSubmit={handleSubmit(login)}
            className={`bg-[${global.colors.secondary}] mt-10 rounded-md py-7 px-10 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg sm:mx-auto w-full space-y-3`}
          >
            {errorMessage && <p className="text-red-400">{errorMessage}</p>}
            <input
              {...register("Email", { required: "This field is required" })}
              placeholder="Email"
              type="text"
              className="w-full px-3 focus:outline-blue-300 rounded-md border-2 h-10"
            />
            {errors.Email && (
              <p className="text-red-400">{errors.Email.message}</p>
            )}
            <input
              {...register("Password", { required: "This field is required" })}
              placeholder="Password"
              type="password"
              className="w-full px-3 focus:outline-blue-300 rounded-md border-2 h-10"
            />
            {errors.Password && (
              <p className="text-red-400">{errors.Password.message}</p>
            )}
            <button
              type="submit"
              className={`w-full bg-xblue text-white py-3 rounded-md text-lg font-semibold`}
            >
              Log in
            </button>
          </form>

          <div className="flex flex-col space-y-3 py-7">
            <div
              className={`bg-[${global.colors.primary}] text-white mx-auto border inline-flex px-2 py-1 text-xs rounded-md hover:text-gray-500 hover:border-gray-500 cursor-pointer`}
            >
              Forgot your password?
            </div>
            <div
              className={`bg-[${global.colors.primary}] text-white mx-auto border inline-flex px-2 py-1 text-xs rounded-md hover:text-gray-500 hover:border-gray-500 cursor-pointer`}
              onClick={() => {
                router.push("/register");
              }}
            >
              No account? Create one here!
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>

      <Footer />
    </>
  );
};

export default index;
