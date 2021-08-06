import React, { useState } from "react";
import { setSessionPassword } from "../../utils";

export const PasswordPrompt = () => {
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(btoa(password), 1);
    window.location.reload();
  };

  return (
    <div>
      <h4>Enter Password</h4>

      <form onSubmit={onSubmit}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default PasswordPrompt;
