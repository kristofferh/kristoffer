import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const enter = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(-50%, 100%, 0);
  }

  to { 
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
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
