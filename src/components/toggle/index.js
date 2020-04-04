import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

const Toggle = ({ options, input, binary, className }) => {
  return (
    <nav
      className={classNames("radio-toggles", className, {
        "radio-toggles--binary": binary
      })}
    >
      {options.map(option => (
        <label className="radio-toggle" key={option.value}>
          <input
            type="radio"
            name={input.name}
            value={option.value}
            checked={input.value === option.value}
            onChange={() => {
              input.onChange();
            }}
          />
          <span className="radio-toggle-text">{option.label}</span>
        </label>
      ))}
    </nav>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  binary: PropTypes.bool
};

export default Toggle;
