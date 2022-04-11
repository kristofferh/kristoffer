export const focusRing = () => `
  &:focus-visible {
    transition: 0.2s ease box-shadow;
    outline: 1px solid transparent;
    box-shadow: 0 0 0 4px #4D90FE;
  }
`;
