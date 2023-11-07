import React from "react";
import "../App.css";
import { useState } from "react";
import Input from "./Input";
import useValidate from "../hooks/useValidate";

const Form = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    rePassword,
    setRePassword,
    errorUsername,
    errorEmail,
    errorPassword,
    errorRePassword,
    usernameColor,
    emailColor,
    passwordColor,
    rePasswordColor,
    validateForm,
  } = useValidate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className=" bg-white rounded-lg shadow-lg px-7 py-10 w-[30%]"
        onSubmit={validateForm}
      >
        <h1 className="text-3xl text-center font-bold decoration-8 mb-10">
          Registration Form
        </h1>
        <Input
          label="Username"
          name="username"
          type="text"
          color={usernameColor}
          value={username}
          onChange={setUsername}
          error={errorUsername}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          color={emailColor}
          value={email}
          onChange={setEmail}
          error={errorEmail}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          color={passwordColor}
          value={password}
          onChange={setPassword}
          error={errorPassword}
        />
        <Input
          label="Confirm password"
          name="comfirmPassword"
          type="password"
          color={rePasswordColor}
          value={rePassword}
          onChange={setRePassword}
          error={errorRePassword}
        />
        <button
          type="submit"
          className="border bg-blue-500 cursor-pointer text-white w-[100%] mt-2 border-blue-500 p-[10px] text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
