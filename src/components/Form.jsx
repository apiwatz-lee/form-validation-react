import React from "react";
import "../App.css";
import { useState } from "react";

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
          Form
        </h1>
        <div className="mb-4 pb-1 flex flex-col">
          <label> Username </label>
          <input
            type="text"
            className={`border border-gray-200 rounded-md px-2 py-1 outline-none ${
              usernameColor === "green"
                ? `border-2 border-green-700`
                : usernameColor === "red"
                ? `border-2 border-red-500`
                : null
            }`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small className={errorUsername && `text-red-500`}>
            {errorUsername}
          </small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Email </label>
          <input
            type="text"
            className={`border border-gray-200 rounded-md px-2 py-1 outline-none ${
              emailColor === "green"
                ? `border-2 border-green-700`
                : emailColor === "red"
                ? `border-2 border-red-500`
                : null
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className={errorEmail && `text-red-500`}>{errorEmail}</small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Password </label>
          <input
            type="password"
            className={`border border-gray-200 rounded-md px-2 py-1 outline-none ${
              passwordColor === "red"
                ? `border-2 border-red-500`
                : passwordColor === "green"
                ? `border-2 border-green-700`
                : null
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className={errorPassword && `text-red-500`}>
            {errorPassword}
          </small>
        </div>
        <div className="mb-4 flex flex-col">
          <label> Confirm password </label>
          <input
            type="password"
            className={`border border-gray-200 rounded-md px-2 py-1 outline-none ${
              rePasswordColor === "red"
                ? `border-2 border-red-500`
                : rePasswordColor === "green"
                ? `border-2 border-green-700`
                : null
            }`}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <small className={errorRePassword && `text-red-500`}>
            {errorRePassword}
          </small>
        </div>
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
