import React, { useState } from "react";
import Toggle from "./index";
import "./index.stories.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const options = [
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
];

const Template: ComponentStory<typeof Toggle> = ({ binary }) => {
  const [value, setValue] = useState("dark");
  const handleChange = () => {
    setValue(value === "dark" ? "light" : "dark");
  };
  return (
    <Toggle
      className="example-toggle"
      binary={binary}
      input={{ name: "toggle", value, onChange: handleChange }}
      options={options}
    />
  );
};

export const Story = Template.bind({});
Story.args = {
  binary: true,
};
Story.storyName = "Toggle";
