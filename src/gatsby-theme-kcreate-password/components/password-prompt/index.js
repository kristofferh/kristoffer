import React, { useState } from "react";
import { setSessionPassword } from "../../../../plugins/gatsby-theme-kcreate-password/src/utils";

import "./styles.scss";

export const PasswordPrompt = () => {
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(btoa(password), 1);
    window.location.reload();
  };

  return (
    <div className="pw-container">
      <form className="pw-form" onSubmit={onSubmit}>
        <h1 className="pw-title">Password protected</h1>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="pw-input"
          placeholder="Password"
        />

        <button className="pw-button">
          <span className="pw-button-text">Submit</span>
        </button>
      </form>
    </div>
  );
};

export default PasswordPrompt;
