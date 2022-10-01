import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Direction } from "../index";

type ContainerProps = {
  slideDirection?: Direction;
  show?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  durationIn?: string;
  durationOut?: string;
};

const transformDirectionStart = (direction?: Direction) => {
  switch (direction) {
    case "rtl":
      return "translateX(100%)";
    case "ttb":
      return "translateY(-100%)";
    case "btt":
      return "translateY(100%)";
    default:
      return "translateX(-100%)";
  }
};

const transformDirectionEnd = (direction?: Direction) => {
  switch (direction) {
    case "rtl":
      return "translateX(-100%)";
    case "ttb":
      return "translateY(0)";
    case "btt":
      return "translateY(0)";
    default:
      return "translateX(0)";
  }
};

const slideIn = (direction?: Direction) => keyframes`
  0% {
    transform: ${transformDirectionStart(direction)};
    opacity: 0;
  }
  
  10% {
    opacity: 0.9;
  }

  90% {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.08);
  }

  100% {
    box-shadow: none;
    transform: ${transformDirectionEnd(direction)};
    opacity: 1;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.08);
  }
`;

const slideOut = (direction?: Direction) => keyframes`
  0% {
    transform: ${transformDirectionEnd(direction)};
    opacity: 1;
  }

  75% {
    box-shadow: none;
    opacity: 0;
  }

  100% {
    transform: ${transformDirectionStart(direction)};
    opacity: 0;
  }
`;

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  left: ${({ slideDirection }) => (slideDirection === "rtl" ? "100%" : 0)};
  overflow: hidden;
  transform: ${({ slideDirection }) => transformDirectionStart(slideDirection)};
  z-index: 10;
  background: #fff;
  width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  height: 100vh;
  height: 100svh;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : undefined)};
  display: flex;
  transition: all 0.25s ease-in;
  ${({ show, slideDirection, durationIn = "0.25s", durationOut = "0.25s" }) =>
    show
      ? css`
          animation: ${slideIn(slideDirection)} ${durationIn} ease-in-out
            forwards;
        `
      : css`
          animation: ${slideOut(slideDirection)} ${durationOut} ease-in-out
            forwards;
        `};
`;
