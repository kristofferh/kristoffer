import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "intersection-observer";

import "./styles";

export default class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      doneAnimating: false
    };

    this.loadImage = this.loadImage.bind(this);
  }

  loadImage() {
    const image = new Image();
    image.src = this.props.img;
    image.onload = () => {
      this.setState({ loaded: true }, () => {
        this.img.addEventListener(
          "animationend",
          () => {
            this.setState({ doneAnimating: true });
          },
          false
        );
      });
    };
  }

  componentDidMount() {
    if (this.props.lazyload) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting === true || intersectionRatio > 0) {
            this.loadImage();
            this.observer.disconnect();
            this.observer = null;
          }
        });
      });
      this.observer.observe(this.imageLoader);
    } else {
      this.loadImage();
    }
  }

  componentWillUnmount() {
    this.observer && this.observer.disconnect();
  }

  render() {
    return (
      <div
        ref={node => (this.imageLoader = node)}
        className={classNames("image-loader", {
          [`${this.props.className}`]: this.props.className,
          "image-loader--placeholder": this.props.aspectRatio
        })}
      >
        {this.props.placeholder &&
          !this.state.doneAnimating && (
            <img
              className={classNames("placeholder", {
                "fade-out": this.state.loaded
              })}
              src={this.props.placeholder}
            />
          )}
        {this.props.aspectRatio && (
          <div style={{ paddingBottom: `${this.props.aspectRatio * 100}%` }} />
        )}
        {this.state.loaded && (
          <img
            ref={node => (this.img = node)}
            className="img"
            src={this.props.img}
          />
        )}
      </div>
    );
  }
}

ImageLoader.defaultProps = {
  lazyload: true
};

ImageLoader.propTypes = {
  aspectRatio: PropTypes.number,
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  lazyload: PropTypes.bool
};
