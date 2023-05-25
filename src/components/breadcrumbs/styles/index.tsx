import styled from "@emotion/styled";
import { static_00_monospace } from "../../../styles";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Item = styled.li`
  ${static_00_monospace()}
  position: relative;

  &:not(:first-child)::before {
    content: "→";
    font-weight: 400;
    position: absolute;
    left: -1.35rem;
  }
`;
