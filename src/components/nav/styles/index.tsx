import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import {
  PAGE_MARGIN_HORIZONTAL,
  PAGE_MARGIN_VERTICAL,
  PAGE_MARGIN_VERTICAL_DESKTOP,
  fluid_03,
  fancyLinks,
  DESKTOP_LAYOUT,
  static_00_monospace,
  sans_serif,
} from "../../../styles";
import { Link } from "gatsby";

export const enter = keyframes`
  from { 
    opacity: 0;
    transform: translate(0, -100%, 0);
  }

  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const logoEnter = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const LogoContainer = styled(motion.div)`
  flex-shrink: 0;
  margin-top: 1.5rem;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

export const Controls = styled.nav<{ wide?: boolean }>`
  position: fixed;
  bottom: ${PAGE_MARGIN_VERTICAL};
  bottom: max(
    ${PAGE_MARGIN_VERTICAL},
    calc(env(safe-area-inset-bottom) + ${PAGE_MARGIN_VERTICAL})
  );
  opacity: 0;
  left: ${PAGE_MARGIN_HORIZONTAL};
  z-index: 100;
  animation: ${enter} 0.25s 0.35s ease-in forwards;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    bottom: unset;
    top: ${PAGE_MARGIN_VERTICAL_DESKTOP};
    left: unset;
    right: ${PAGE_MARGIN_HORIZONTAL};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  padding: 0 ${PAGE_MARGIN_HORIZONTAL};

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    margin-right: calc(${PAGE_MARGIN_HORIZONTAL} * 2 + 64px);
    border-right: 1px solid #eee;
  }
`;

export const MainNavContainer = styled(motion.nav)`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const UtilityNavContainer = styled(motion.nav)`
  margin-bottom: 6rem;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    margin-bottom: ${PAGE_MARGIN_VERTICAL_DESKTOP};
  }
`;

export const MainNav = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const UtilityNav = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em 0;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    flex-direction: row;
    gap: 0 1.5em;
  }
`;

export const PrimaryNavLink = styled(Link)`
  ${fluid_03()}
  ${fancyLinks()}
  ${sans_serif(600)}
  color: inherit;
  text-decoration: none;
  margin: 0.125em 0;
  display: inline-block;
`;

export const UtilityNavLink = styled.a`
  ${static_00_monospace(false)}
  ${fancyLinks()}
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.04em;
  bottom: 0;
  display: inline-block;

  &::after {
    height: 1px;
    bottom: 0;
  }
`;

export const TextSpin = styled(motion.div)`
  ${static_00_monospace()}
  font-size: 0.875rem;
  display: inline-flex;
  align-ttems: center;
  transformorigin: 50% 50%;
  transition: transform 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  font-weight: 500;
`;
