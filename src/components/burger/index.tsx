import React from "react";
import { Icon } from "./styles";

interface Props {
  active?: boolean;
  size?: number;
}

export const Burger: React.FC<Props> = ({ active, size = 24 }) => (
  <Icon active={active} size={size} />
);
