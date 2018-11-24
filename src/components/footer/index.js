import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Footer = ({ name, email }) => {
  return (
    <footer className="page-footer content-container">
      <div className="footer-inner">
        {name}
        {" — "} <a href={`mailto:${email}`}>{email}</a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.node,
  email: PropTypes.node
};

export default Footer;
