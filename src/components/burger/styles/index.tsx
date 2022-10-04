import styled from "@emotion/styled";

const easing = "cubic-bezier(0.65, 0.05, 0.36, 1)";

export const Icon = styled.div<{ active?: boolean; size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: ${({ size }) => `${size - size / 3}px`};
    height: 1px;
    background-color: currentColor;
    transition: all 0.25s ${easing};
    transition-property: top, transform;
    transform: rotate(0);
    transform-origin: 50% 50%;
  }

  &::before {
    top: ${({ active, size }) =>
      active ? "calc(50% - 1px)" : `calc(50% - ${size / 6}px + 1px)`};
    transform: ${({ active }) => (active ? "rotate(-45deg)" : 0)};
  }

  &::after {
    top: ${({ active, size }) =>
      active ? "calc(50% - 1px)" : `calc(50% + ${size / 6}px - 1px)`};
    transform: ${({ active }) => (active ? "rotate(45deg)" : 0)};
  }
`;
