import React from "react";
import { IconButton } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Story as Burger } from "../burger/index.stories";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  const [{ active }, updateArgs] = useArgs();
  const handleClick = () => updateArgs({ active: !active });
  return (
    <IconButton {...args} onClick={handleClick}>
      <Burger {...args} />
    </IconButton>
  );
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Icon Button";
