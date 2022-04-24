import React, { useState } from "react";
import { ResizeObserverClass as ResizeObserver } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Resize Observer",
  component: ResizeObserver,
} as ComponentMeta<typeof ResizeObserver>;

const Template: ComponentStory<typeof ResizeObserver> = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const addItem = () => {
    setItems((items) => [...items, `Item ${items.length + 1}`]);
  };

  const onResize = ({ height, width }: { height: number; width: number }) => {
    setHeight(height);
    setWidth(width);
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <p>
        <code>{`height: ${height}; width: ${width}`}</code>
      </p>

      <ResizeObserver onResize={onResize}>
        {(resizeRef) => (
          <div ref={resizeRef}>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </ResizeObserver>
    </div>
  );
};

export const Story = Template.bind({});
Story.args = {};
Story.storyName = "Resize Observer";
