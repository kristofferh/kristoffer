import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const BrowserFrame = ({ children }) => (
  <figure className="browser-frame">
    <div className="browser-frame-chrome">
      <div className="browser-frame-top-bar">
        <div className="browser-frame-controls">
          <div className="browser-frame-control browser-frame-control--close" />
          <div className="browser-frame-control browser-frame-control--minimize" />
          <div className="browser-frame-control browser-frame-control--fullscreen" />
        </div>
      </div>
      <div className="browser-frame-body">{children}</div>
    </div>
  </figure>
);

BrowserFrame.propTypes = {
  children: PropTypes.any
};

export default BrowserFrame;
