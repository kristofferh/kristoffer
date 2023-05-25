import React from "react";
import { Breadcrumbs } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
  return <Breadcrumbs {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Breadcrumbs";
