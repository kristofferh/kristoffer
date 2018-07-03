import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellSpacing: this.props.cellSpacing,
      clickGuard: false,
      dragging: false,
      index: this.props.index,
      items: this.props.showItems,
      itemWidth: "100%",
      itemOuterWidth: 0,
      wrapperWidth: "100%"
    };

    this.touchObject = {};

    this.setDimensions = this.setDimensions.bind(this);
    this.handleMediaQuery = this.handleMediaQuery.bind(this);
    // Touch Events
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchCancel = this.handleTouchCancel.bind(this);
    // Mouse Events
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  // TODO: UPDATE THIS.
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.setState(
        {
          index: nextProps.index
        },
        () => {
          this.animateTo();
        }
      );
    }
  }

  componentDidMount() {
    // Listen for breakpoints.

    const hasMatchMedia = Boolean(window.matchMedia);
    this.mqs = this.props.breakpoints.map(breakpoint => {
      if (hasMatchMedia && breakpoint.mq) {
        return window.matchMedia(breakpoint.mq);
      }
    });

    this.mqs.forEach(mq => {
      mq.addListener(this.handleMediaQuery);
    });
    this.handleMediaQuery();

    // @todo: debounce the resize listener.
    window.addEventListener("resize", this.setDimensions);

    this.setDimensions();
    this.animateTo();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setDimensions);
    this.mqs.forEach(mq => {
      mq.removeListener(this.handleMediaQuery);
    });
  }

  previous() {
    if (this.state.index <= 0) {
      this.animateTo();
    }

    this.setState(
      {
        index: Math.max(0, this.state.index - this.state.items)
      },
      () => {
        this.animateTo();
      }
    );
  }

  next() {
    const count = React.Children.count(this.props.children);

    if (this.state.index >= count - this.state.items) {
      return this.animateTo();
    }

    this.setState(
      {
        index: this.state.index + this.state.items
      },
      () => {
        this.animateTo();
      }
    );
  }

  handleMediaQuery() {
    // This all feels a little brittle, can it be simplified?
    const match = this.mqs.reverse().find(query => query.matches);

    if (match) {
      const item = this.props.breakpoints.find(breakpoint => {
        // IE10-11 returns match.media as 'all and (max-width:860px)'
        // -- adds `all and` and removes the space between property and value. Why?
        // Good question, no one knows, but we have to adapt and use a
        // regular expression.
        const regex = new RegExp(breakpoint.mq.replace(": ", ":\\s*"));
        return regex.test(match.media);
      });
      if (item) {
        this.setState(
          {
            items: item.showItems,
            cellSpacing: item.cellSpacing
          },
          () => {
            this.setDimensions();
          }
        );
      }
    } else {
      this.setState({
        items: this.props.showItems,
        cellSpacing: this.props.cellSpacing
      });
    }
  }

  handleMouseDown(e) {
    this.touchObject = {
      startX: e.clientX,
      startY: e.clientY
    };

    this.setState({
      dragging: true
    });
  }

  handleMouseMove(e) {
    if (!this.state.dragging) {
      return;
    }
    this.updateOnDrag(e.clientX, e.clientY);
  }

  handleMouseUp() {
    if (!this.state.dragging) {
      return;
    }
    this.updateOnSwipe();
  }

  handleMouseLeave() {
    if (!this.state.dragging) {
      return;
    }
    this.updateOnSwipe();
  }

  handleTouchStart(e) {
    this.touchObject = {
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY
    };
  }

  handleTouchMove(e) {
    if (this.touchObject && this.touchObject.direction !== 0) {
      //e.preventDefault();
    }
    this.updateOnDrag(e.touches[0].pageX, e.touches[0].pageY);
  }

  handleTouchEnd() {
    this.updateOnSwipe();
  }

  handleTouchCancel() {
    this.updateOnSwipe();
  }

  handleClick(e) {
    if (this.state.clickGuard) {
      e.preventDefault();
    }
  }

  updateOnDrag(x, y) {
    // @todo: this only cares about horizontal direction for now.

    const direction = this.swipeDirection(
      this.touchObject.startX,
      x,
      this.touchObject.startY,
      y
    );

    const length = Math.round(
      Math.sqrt(Math.pow(x - this.touchObject.startX, 2))
    );

    this.touchObject = {
      ...this.touchObject,
      length: length,
      direction: direction
    };

    this.setState({
      x: this.getLeftOffset(length * direction)
    });
  }

  updateOnSwipe() {
    if (this.touchObject.length > this.props.minDragLength) {
      if (this.touchObject.direction === 1) {
        this.next();
      } else if (this.touchObject.direction === -1) {
        this.previous();
      } else {
        this.animateTo();
      }
    } else {
      this.animateTo();
    }

    // Reset
    this.setState({
      dragging: false,
      clickGuard:
        this.touchObject.length &&
        this.touchObject.length > this.props.clickGuardDistance
    });
    this.touchObject = {};
  }

  animateTo() {
    this.setState(
      {
        x: this.state.index * this.state.itemOuterWidth * -1
      },
      () => {
        if (this.props.dataCallback) {
          this.props.dataCallback({
            index: this.state.index,
            hasNext:
              this.state.index <
              React.Children.count(this.props.children) - this.state.items,
            hasPrevious: this.state.index > 0
          });
        }
      }
    );
  }

  getLeftOffset(touchOffset) {
    return (this.state.index * this.state.itemOuterWidth + touchOffset) * -1;
  }

  swipeDirection(x1, x2, y1, y2) {
    const xDelta = x1 - x2;
    const yDelta = y1 - y2;
    const rad = Math.atan2(yDelta, xDelta);

    let swipeAngle = Math.round((rad * 180) / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return 1;
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return 1;
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return -1;
    }

    // @todo: this only deals with horizontal direction, add vertical here
    // if needed.
    return 0;
  }

  setDimensions() {
    const itemOuterWidth = this.frame.offsetWidth / this.state.items;
    const wrapperWidth =
      React.Children.count(this.props.children) * itemOuterWidth;
    this.setState(
      {
        itemOuterWidth: itemOuterWidth,
        itemWidth: itemOuterWidth - 2 * this.state.cellSpacing,
        wrapperWidth: wrapperWidth
      },
      () => {
        this.animateTo();
      }
    );
  }

  render() {
    const { baseClassName } = this.props;
    const transform = `translate3d(${this.state.x}px, 0, 0)`;
    return (
      <div
        className={classNames(baseClassName, {
          [`${this.props.className}`]: this.props.className
        })}
        ref={node => (this.frame = node)}
      >
        <div
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onTouchCancel={this.handleTouchCancel}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          style={{
            msTransform: transform,
            WebkitTransform: transform,
            transform: transform,
            width: this.state.wrapperWidth
          }}
          className={classNames(`${baseClassName}-wrapper`, {
            dragging: this.state.dragging
          })}
          ref={node => (this.wrapper = node)}
        >
          {React.Children.map(this.props.children, (child, i) => (
            <div
              style={{
                width: this.state.itemWidth,
                marginRight: this.state.cellSpacing,
                marginLeft: this.state.cellSpacing
              }}
              className={`${baseClassName}-item`}
              key={i}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  baseClassName: "carousel",
  cellSpacing: 15,
  index: 0,
  showItems: 1,
  breakpoints: [],
  minDragLength: 100,
  clickGuardDistance: 40
};

Carousel.propTypes = {
  breakpoints: PropTypes.array,
  baseClassName: PropTypes.string,
  cellSpacing: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string,
  clickGuardDistance: PropTypes.number,
  dataCallback: PropTypes.func,
  minDragLength: PropTypes.number,
  index: PropTypes.number, // Update index from outside carousel.
  showItems: PropTypes.number
};
