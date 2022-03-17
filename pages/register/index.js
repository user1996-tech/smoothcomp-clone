import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Selector from "../../components/Selector";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { global } from "../../global";
import { useRouter } from "next/router";

const player = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(`${global.apiAddress}/register`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        ConfirmEmail: data.ConfirmEmail,
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword,
      }),
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        if (result.status == "success") {
          reset();
          router.push({
            pathname: "/login",
            query: { message: "You've successfully signed up" },
          });
        } else {
          setErrorMessage(result.message);
          window.scrollTo(0, 0);
          reset();
        }
      });
  };

  return (
    <>
      <Header />

      <body>
        <div
          className={`bg-[${global.colors.primary}] px-1 py-10 min-h-screen flex flex-col`}
        >
          <Selector options={global.loginOptions} selected="Create account" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`bg-white mt-10 rounded-md py-7 px-10 divide-y divide-slate-300 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg sm:mx-auto w-full`}
          >
            {errorMessage && <p className="text-red-400">{errorMessage}</p>}
            <div className="space-y-3 my-5">
              <div className="mx-auto flex flex-col text-sm">
                <label for="FirstName">First name</label>
                <input
                  name="FirstName"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("FirstName", { required: "This is required" })}
                />
                {errors.FirstName && (
                  <p className="text-red-400 font-semibold">
                    {errors.FirstName.message}
                  </p>
                )}
              </div>

              <div className="mx-auto flex flex-col text-sm">
                <label for="LastName">Last name</label>
                <input
                  name="LastName"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("LastName", { required: "This is required" })}
                />
                {errors.LastName && (
                  <p className="text-red-400 font-semibold">
                    {errors.LastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 my-5">
              <div className="mx-auto flex flex-col text-sm mt-4">
                <label for="Email">Email</label>
                <input
                  name="Email"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("Email", {
                    required: "This is required",
                    validate: {
                      pattern: (v) =>
                        v.match(global.emailRegex) ? true : "Invaid email",
                    },
                  })}
                />
                {errors.Email && (
                  <p className="text-red-400 font-semibold">
                    {errors.Email.message}
                  </p>
                )}
              </div>

              <div className="mx-auto flex flex-col text-sm mt-4">
                <label for="ConfirmEmail">Confirm Email</label>
                <input
                  name="ConfirmEmail"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("ConfirmEmail", {
                    required: "This is required",
                    validate: {
                      value: (v) =>
                        v == getValues("Email") ? true : "Emails do not match",
                    },
                  })}
                />
                {errors.ConfirmEmail && (
                  <p className="text-red-400 font-semibold">
                    {errors.ConfirmEmail.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 my-5">
              <div className="mx-auto flex flex-col text-sm mt-4">
                <label for="Password">Password</label>
                <input
                  name="Password"
                  type="password"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("Password", { required: "This is required" })}
                />
                {errors.Password && (
                  <p className="text-red-400 font-semibold">
                    {errors.Password.message}
                  </p>
                )}
              </div>

              <div className="mx-auto flex flex-col text-sm mt-4">
                <label for="ConfirmPassword">Confirm password</label>
                <input
                  name="ConfirmPassword"
                  type="password"
                  className="rounded-md border-2 border-gray-300 h-10 mt-1 px-3 focus:outline-blue-300"
                  {...register("ConfirmPassword", {
                    required: "This is required",
                    validate: {
                      value: (v) =>
                        v == getValues("Password")
                          ? true
                          : "Passwords do not match",
                    },
                  })}
                />
                {errors.ConfirmPassword && (
                  <p className="text-red-400 font-semibold">
                    {errors.ConfirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              // onClick={handleSubmit(onSubmit)}
              className={`w-full bg-[#78B328] text-white flex items-center justify-center rounded-md text-xl py-3 cursor-pointer`}
            >
              Create account
            </button>
          </form>

          <div
            className={`bg-[${global.colors.primary}] text-white mx-auto border inline-flex px-2 py-1 text-xs rounded-md hover:text-gray-500 hover:border-gray-500 my-8 cursor-pointer`}
            onClick={() => {
              router.push("/login");
            }}
          >
            Already have an account? Login
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
};

export default player;
