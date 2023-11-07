import { useState } from "react";

const useValidate = () => {
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
  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    rePassword,
    setRePassword,
    errorUsername,
    setErrorUsername,
    errorEmail,
    setErrorEmail,
    errorPassword,
    setErrorPassword,
    errorRePassword,
    setErrorRePassword,
    usernameColor,
    setUsernameColor,
    emailColor,
    setEmailColor,
    passwordColor,
    setPasswordColor,
    rePasswordColor,
    setRePasswordColor,
    validateForm,
  };
};

export default useValidate;
