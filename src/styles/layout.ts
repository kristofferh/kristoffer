export const PAGE_MARGIN_HORIZONTAL = "5vw";
export const GUTTER_MOBILE = "clamp(0.5rem, 2.1333vw, 1rem)";
export const GUTTER_DESKTOP = "clamp(1rem, 1.6667vw, 2rem)";

export const focusRing = () => `
  &:focus-visible {
    transition: 0.2s ease box-shadow;
    outline: 1px solid transparent;
    box-shadow: 0 0 0 4px #4D90FE;
  }
`;
