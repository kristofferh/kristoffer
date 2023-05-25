import React from "react";
import { Settings, Share } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

interface Props {
  children: React.ReactNode;
}

const Icons: React.FC<Props> = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridAutoFlow: "column",
      width: 24,
      gridGap: "1rem",
    }}
  >
    {children}
  </div>
);

export default {
  title: "Components/Icons",
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Share> = () => {
  return (
    <Icons>
      <Settings />
      <Share />
    </Icons>
  );
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Icons";
