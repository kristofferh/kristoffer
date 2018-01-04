import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

const DeviceFrame = ({ children, className, styles, bodyStyles, type }) => (
  <figure
    className={classNames("device-frame", className, {
      [`device-frame--${type}`]: type
    })}
    style={styles}
  >
    <div className="device-frame-chrome">
      <header className="device-frame-header">
        <div className="device-frame-controls">
          <div className="device-frame-control device-frame-control--close" />
          <div className="device-frame-control device-frame-control--minimize" />
          <div className="device-frame-control device-frame-control--fullscreen" />
        </div>
      </header>
      <div className="device-frame-body" style={bodyStyles}>
        {children}
      </div>
      <footer className="device-frame-footer" />
    </div>
  </figure>
);

DeviceFrame.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  styles: PropTypes.object,
  bodyStyles: PropTypes.object,
  type: PropTypes.string
};

export default DeviceFrame;
