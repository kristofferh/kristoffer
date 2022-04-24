import { ReactNode } from "react";
import { Observer, ObserverInterface } from "../index";

interface Props {
  children: (ref: (e: HTMLElement | null) => void) => ReactNode;
  onResize: (dimensions: DOMRect) => void;
}

const createResizeObserver = (node: Element, callback: () => void) => {
  let observer: ObserverInterface;
  observer = new ResizeObserver(callback);
  observer.observe(node);
  return observer;
};

export class ResizeObserverClass extends Observer<Props> {
  name = "ResizeObserver";

  state = {
    width: 0,
    height: 0
  };

  onResize = () => {
    if (this.childNode !== null) {
      // Eventually use `clientRect` on the `entries[]` returned natively
      const domRect = this.childNode.getBoundingClientRect();
      const { height, width } = domRect;
      // Check for actual resize event
      if (this.state.height === height && this.state.width === width) {
        return;
      }

      this.props.onResize(domRect);
    }
  };

  beginObserve = () => {
    // The superclass checks that childNode is not null before invoking
    // beginObserve()
    const childNode = this.childNode!;
    this.observer = createResizeObserver(childNode, this.onResize);
  };
}
