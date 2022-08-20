import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

export const enter = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, 100%, 0);
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
  bottom: 16px;
  bottom: max(16px, calc(env(safe-area-inset-bottom) + 16px));
  opacity: 0;
  left: 18px;
  z-index: 100;
  overflow: hidden;
  animation: ${enter} 0.25s 0.35s ease-in forwards;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

export const MainNavContainer = styled(motion.nav)`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const UtilityNavContainer = styled(motion.nav)`
  margin-bottom: 8rem;
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
  gap: 0 1rem;
`;
