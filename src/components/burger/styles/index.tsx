import styled from "@emotion/styled";

const easing = "cubic-bezier(0.65, 0.05, 0.36, 1)";

export const Icon = styled.div<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  display: block;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 1rem;
    height: 1px;
    margin: 0 0.25rem;
    background-color: currentColor;
    transition: all 0.25s ${easing};
    transition-property: top, transform;
    transform: rotate(0);
    transform-origin: 50% 50%;
  }

  &::before {
    top: ${({ active }) => (active ? "calc(50% - 1px)" : "8px")};
    transform: ${({ active }) => (active ? "rotate(-45deg)" : 0)};
  }

  &::after {
    top: ${({ active }) => (active ? "calc(50% - 1px)" : "14px")};
    transform: ${({ active }) => (active ? "rotate(45deg)" : 0)};
  }
`;
