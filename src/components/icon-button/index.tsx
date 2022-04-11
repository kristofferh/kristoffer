import React, { forwardRef } from "react";
import { Container } from "./styles";

interface Props {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ active, onClick, children, style, className }, ref) => {
    return (
      <Container
        ref={ref}
        active={active}
        style={style}
        onClick={onClick}
        className={className}
      >
        {children}
      </Container>
    );
  }
);
