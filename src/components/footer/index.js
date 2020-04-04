import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import Toggle from "../toggle";
import "./styles.scss";

const Footer = ({ name, email }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <footer className="page-footer content-container">
      <div className="footer-inner">
        {name}
        {" — "} <a href={`mailto:${email}`}>{email}</a>
        <Toggle
          className="theme-toggle"
          binary
          options={[
            {
              value: "light",
              label: (
                <span role="img" aria-label="sun" title="Toggle light">
                  🌞
                </span>
              ),
            },
            {
              value: "dark",
              label: (
                <span role="img" aria-label="moon" title="Toggle dark">
                  🌒
                </span>
              ),
            },
          ]}
          input={{ name: "toggle", onChange: handleToggle, value: theme }}
        />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.node,
  email: PropTypes.node,
};

export default Footer;
