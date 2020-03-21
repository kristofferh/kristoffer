import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import "./styles.scss";

const Footer = ({ name, email }) => {
  const { toggleTheme } = useContext(ThemeContext);
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <footer className="page-footer content-container">
      <div className="footer-inner">
        {name}
        {" — "} <a href={`mailto:${email}`}>{email}</a>
        <a className="theme-toggle" onClick={handleToggle}>
          Toggle theme
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.node,
  email: PropTypes.node
};

export default Footer;
