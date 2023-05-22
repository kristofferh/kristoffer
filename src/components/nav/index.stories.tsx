import React, { useState } from "react";
import { Nav } from "./index";
import { ResizeObserverClass as ResizeObserver } from "../observer/resize/index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DESKTOP_LAYOUT } from "../../styles";

export default {
  title: "Components/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => {
  const [width, setWidth] = useState(0);

  const onResize = ({ width }: { width: number }) => {
    setWidth(width);
  };
  const desktop = width > DESKTOP_LAYOUT;

  return (
    <ResizeObserver onResize={onResize}>
      {(resizeRef) => (
        <div
          ref={resizeRef}
          style={{
            backgroundColor: "#eee",
            width: "100vw",
            height: "800vh",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <Nav {...args} isDesktop={desktop} />
        </div>
      )}
    </ResizeObserver>
  );
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Nav";
