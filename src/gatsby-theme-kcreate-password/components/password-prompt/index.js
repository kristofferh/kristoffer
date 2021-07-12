import React, { useState } from "react";
import { setSessionPassword } from "../../../../plugins/gatsby-theme-kcreate-password/src/utils";

const styles = {
  wrapper: {
    height: "100vh",
    background: "#424242",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    height: "48px",
    background: "rebeccapurple",
    color: "#fff",
    border: "1px solid rebeccapurple",
    borderRadius: "4px",
    marginTop: "16px",
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "sans-serif",
  },
  buttonHover: {
    background: "#fff",
    color: "#000000",
  },
  link: {
    color: "#fff",
    fontFamily: "sans-serif",
  },
  linkHover: {
    color: "dodgerblue",
  },
};

export const PasswordPrompt = () => {
  const [password, setPassword] = useState("");
  const [isButtonHovered, buttonHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(btoa(password), 1);
    window.location.reload();
  };

  return (
    <div style={styles.wrapper}>
      <h4 style={{ color: "#fff" }}>Shadowed</h4>

      <form onSubmit={onSubmit} style={{ width: "320px" }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordPrompt;
