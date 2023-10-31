import React, { useState } from "react";

import { signupApi } from "../../api-manager/api-manager";

export default function SignUp({ changeAuth, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSignUp = async () => {
    if (username && password) {
      let result = await signupApi(username, password);

      if (result) {
        localStorage.setItem("jwt", result.data.jwt);
        setToken(result.data.jwt);
      }
    }

    return;
  };

  return (
    <div>
      <form onSubmit={onSignUp}>
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
      <button>Sign up</button>
      <p>
        Already have an account? <span onClick={changeAuth}>Login</span> here.
      </p>
    </div>
  );
}
