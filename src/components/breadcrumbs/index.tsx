import React from "react";
import { List, Item } from "./styles";

export const Breadcrumbs: React.FC = () => (
  <nav>
    <List>
      <Item>Home</Item>
      <Item>Resume</Item>
    </List>
  </nav>
);
