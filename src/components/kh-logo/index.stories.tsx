import React from "react";
import { KHLogo } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/KHLogo",
  component: KHLogo,
} as ComponentMeta<typeof KHLogo>;

const Template: ComponentStory<typeof KHLogo> = (args) => {
  return <KHLogo {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "KHLogo";
