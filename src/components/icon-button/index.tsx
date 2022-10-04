import React, { forwardRef } from "react";
import { Container } from "./styles";

interface Props {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  size?: number;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ active, onClick, children, style, className, size }, ref) => {
    return (
      <Container
        ref={ref}
        active={active}
        style={style}
        onClick={onClick}
        className={className}
        size={size}
      >
        {children}
      </Container>
    );
  }
);
