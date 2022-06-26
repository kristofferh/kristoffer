import React from "react";
import { Nav } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => {
  return <Nav {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Nav";
