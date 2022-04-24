import React, { useState, useEffect } from "react";
import { Clock } from "./index";
export default {
  component: Clock,
  title: "Components/Clock",
};

const Template: any = () => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now());
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return <display-clock date={time}></display-clock>;
};

export const Story = Template.bind({});
Story.storyName = "Clock";
