import styled from "@emotion/styled";
import { focusRing } from "../../../styles/layout";

export const Container = styled.button<{ active?: boolean }>`
  appearance: none;
  border: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ active }) =>
    active ? "rgba(0, 0, 0, 0.05)" : "transparent"};
  transition: background 0.2s ease;

  ${focusRing()}
`;
