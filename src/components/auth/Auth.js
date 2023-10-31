import React, { useState } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

export default function Auth({ setToken }) {
  const [isLogin, setIsLogin] = useState(true);

  const changeAuth = () => {
    setIsLogin((prevState) => !prevState);
  };

  return isLogin ? (
    <Login changeAuth={changeAuth} setToken={setToken} />
  ) : (
    <SignUp changeAuth={changeAuth} setToken={setToken} />
  );
}
