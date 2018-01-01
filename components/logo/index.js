import React from "react";
import { Link } from "react-router";

import Mark from "../mark";

import "./styles.scss";

const Logo = () => (
  <Link to="/" className="nav-logo">
    <span className="nav-logo-container">
      <Mark />
    </span>
  </Link>
);

export default Logo;
