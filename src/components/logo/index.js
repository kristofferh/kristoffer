import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Mark from "../mark";

import "./styles.scss";

const Logo = ({ location }) => {
  const Holder = location.pathname !== "/" ? Link : "span";
  return (
    <Holder to="/" className="nav-logo">
      <span className="nav-logo-container">
        <Mark />
      </span>
    </Holder>
  );
};

Logo.propTypes = {
  location: PropTypes.object
};

export default Logo;
