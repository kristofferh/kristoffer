import React from "react";
import { Panel } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => {
  return (
    <Panel {...args}>
      <div>Stuff in the panel</div>
    </Panel>
  );
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Panel";
