import React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  useStroke?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  color = "inherit",
  className,
  style,
  children,
  useStroke,
  ...rest
}) => (
  <svg
    style={style}
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={useStroke ? "none" : color}
    stroke={useStroke ? color : "none"}
    {...rest}
  >
    {children}
  </svg>
);

export * from "./share";
export * from "./settings";
