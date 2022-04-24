import React, { useState, useRef } from "react";
import { GridLayout } from "./index";
import { ResizeObserverClass as ResizeObserver } from "../observer/resize";
export default {
  component: GridLayout,
  title: "Components/Grid",
};

const Template: any = () => {
  const gridRef = useRef<any>(null);
  const mobileGutters = "clamp(0.5rem, 2.1333vw, 1rem)";
  const desktopGutters = "max(1rem, 1.6667vw)";
  const mobileStyles = { "--grid-column-color": "rgba(0, 0, 255, 0.1)" };
  const desktopStyles = { "--grid-column-color": "rgba(255, 0, 0, 0.1)" };
  const [gutters, setGutters] = useState(mobileGutters);
  const [styles, setStyles] = useState(mobileStyles);
  const onResize = ({ width }: { width: number }) => {
    setGutters(width < 1024 ? mobileGutters : desktopGutters);
    setStyles(width < 1024 ? mobileStyles : desktopStyles);
  };

  return (
    <ResizeObserver onResize={onResize}>
      {(resizeRef) => (
        <div ref={resizeRef}>
          <grid-layout
            ref={gridRef}
            margins="5vw"
            gutters={gutters}
            style={styles}
          ></grid-layout>
        </div>
      )}
    </ResizeObserver>
  );
};

export const Story = Template.bind({});
Story.storyName = "Grid";
