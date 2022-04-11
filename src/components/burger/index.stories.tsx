import React from "react";
import { Burger } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Burger",
  component: Burger,
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => {
  return <Burger {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Burger";
