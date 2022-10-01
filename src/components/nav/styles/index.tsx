import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import {
  PAGE_MARGIN_HORIZONTAL,
  PAGE_MARGIN_VERTICAL,
  PAGE_MARGIN_VERTIAL_DESKTOP,
  fluid_03,
  fancyLinks,
  DESKTOP_LAYOUT,
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
  overflow: hidden;
  animation: ${enter} 0.25s 0.35s ease-in forwards;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    bottom: unset;
    top: ${PAGE_MARGIN_VERTIAL_DESKTOP};
    left: unset;
    right: ${PAGE_MARGIN_HORIZONTAL};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  margin: ${PAGE_MARGIN_VERTICAL} ${PAGE_MARGIN_HORIZONTAL} 0;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    margin-right: calc(${PAGE_MARGIN_HORIZONTAL} * 2 + 48px);
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
  margin-bottom: 5rem;

  @media (min-width: ${DESKTOP_LAYOUT}px) {
    margin-bottom: ${PAGE_MARGIN_VERTIAL_DESKTOP};
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
    gap: 0 1em;
  }
`;

export const PrimaryNavLink = styled(Link)`
  ${fluid_03()}
  ${fancyLinks()}
  color: inherit;
  text-decoration: none;
  margin: 0.125em 0;
  display: inline-block;
`;
