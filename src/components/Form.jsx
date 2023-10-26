import React from "react";
import "../App.css";
import { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      setErrorUsername("กรุณาใส่ username");
      setUsernameColor("red");
    } else if (username.length < 8) {
      setErrorUsername("กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร");
      setUsernameColor("red");
    } else {
      setErrorUsername("");
      setUsernameColor("green");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else if (email.length === 0) {
      setErrorEmail("กรุณาใส่ email");
      setEmailColor("red");
    } else {
      setErrorEmail("รูปแบบ email ไม่ถูกต้อง");
      setEmailColor("red");
    }

    if (password.length === 0) {
      setErrorPassword("กรุณาใส่ password");
      setPasswordColor("red");
    } else if (password.length < 8) {
      setErrorPassword("กรุณาใส่ password มากกว่า 8 ตัวอักษร");
      setPasswordColor("red");
    } else {
      setErrorPassword("");
      setPasswordColor("green");
    }

    if (rePassword.length === 0) {
      setErrorRePassword("กรุณาใส่ confirm password");
      setRePasswordColor("red");
    } else if (rePassword.length < 8) {
      setErrorRePassword("กรุณาใส่ password มากกว่า 8 ตัวอักษร");
      setRePasswordColor("red");
    } else if (rePassword !== password) {
      setErrorRePassword("password ไม่ตรงกัน");
      setRePasswordColor("red");
    } else if (rePassword === password) {
      setErrorRePassword("");
      setRePasswordColor("green");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className=" bg-white rounded-lg shadow-lg px-7 py-10 w-[50%]"
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
