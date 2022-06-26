import React from "react";
import { Controls } from "./styles";
import { IconButton } from "../icon-button";
import { Burger } from "../burger";

export const Nav: React.FC = () => {
  return (
    <Controls>
      <IconButton>
        <Burger />
      </IconButton>
    </Controls>
  );
};
