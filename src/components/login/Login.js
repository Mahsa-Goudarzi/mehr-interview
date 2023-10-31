import React, { useState } from "react";

import { loginApi } from "../../api-manager/api-manager";

export default function Login({ changeAuth, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    if (username && password) {
      let result = await loginApi(username, password);

      if (result) {
        localStorage.setItem("jwt", result.data.jwt);
        setToken(result.data.jwt);
      }
    }

    return;
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <input
          type="text"
          onChange={onChangeUsername}
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          onChange={onChangePassword}
          placeholder="Password"
          autoComplete="off"
        />
      </form>
      <button type="submit">Login</button>
      <p>
        Don't have an account yet? <span onClick={changeAuth}>Sign up</span>{" "}
        here.
      </p>
    </div>
  );
}
