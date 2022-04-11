import React from "react";
import { Icon } from "./styles";

interface Props {
  active?: boolean;
}

export const Burger: React.FC<Props> = ({ active }) => <Icon active={active} />;
