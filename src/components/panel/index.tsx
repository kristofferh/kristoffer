import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

export type Direction = "ltr" | "rtl" | "ttb" | "btt";

interface Props {
  direction?: Direction;
  show?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
  maxWidth?: number | string;
  maxHeight?: number | string;
  style?: React.CSSProperties;
  durationIn?: string;
  durationOut?: string;
  lockScroll?: boolean;
}

export const Panel: React.FC<Props> = ({
  children,
  direction,
  show,
  className,
  onClose,
  maxHeight,
  maxWidth,
  style,
  durationIn,
  durationOut,
  lockScroll,
}) => {
  const [render, setRender] = useState(show);
  const panelRef = useRef(null);

  useEffect(() => {
    if (show) {
      setRender(true);
      if (lockScroll) {
        document.querySelector("body")?.classList.add("lock");
      }
    } else {
      if (lockScroll) {
        document.querySelector("body")?.classList.remove("lock");
      }
    }
  }, [show, lockScroll]);

  const handleAnimationEnd = (event: React.AnimationEvent) => {
    // There could be other things animating inside the panel so let's make
    // sure we only set render to be `false` when the panel itself has animated out.
    if (!show && event.target === panelRef.current!) {
      setRender(false);
      if (onClose) {
        onClose();
      }
    }
  };
  return render ? (
    <Container
      slideDirection={direction}
      ref={panelRef}
      onAnimationEnd={handleAnimationEnd}
      show={show}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      className={className}
      style={style}
      durationIn={durationIn}
      durationOut={durationOut}
    >
      {children}
    </Container>
  ) : null;
};
