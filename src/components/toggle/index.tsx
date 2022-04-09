import classNames from "classnames";
import React from "react";
import "./styles.scss";

type Props = {
  className?: string;
  options: {
    value: string;
    label: React.ReactNode;
  }[];
  input: {
    name: string;
    value: string;
    onChange?: () => void;
  };
  binary?: boolean;
};

const Toggle: React.FC<Props> = ({ options, input, binary, className }) => {
  return (
    <nav
      className={classNames("radio-toggles", className, {
        "radio-toggles--binary": binary,
      })}
    >
      {options.map((option) => (
        <label className="radio-toggle" key={option.value}>
          <input
            type="radio"
            name={input.name}
            value={option.value}
            checked={input.value === option.value}
            onChange={() => {
              if (input.onChange) {
                input.onChange();
              }
            }}
          />
          <span className="radio-toggle-text">{option.label}</span>
        </label>
      ))}
    </nav>
  );
};

export default Toggle;
