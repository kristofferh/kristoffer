import React, { Component } from "react";
import Helmet from "react-helmet";
import Carousel from "nuka-carousel";

exports.data = {
  order: 1,
  title: "Milestones",
  color: "pink",
  description: "Set milestones to help you reach your goals.",
  media: [
    {
      type: "image",
      src: "/images/milestones/computer.png",
      thumb: "/images/milestones/computer-small.png",
      aspectRatio: 1
    }
  ],
  styles: {
    background: "linear-gradient(80deg, #43D8A8, #BCBCEC)",
    backgroundSize: "400%",
    backgroundPosition: "100%"
  }
};

export default class Spender extends Component {
  constructor() {
    super();
    this.handleLoadedImage = this.handleLoadedImage.bind(this);
  }

  handleLoadedImage() {
    this.carousel.setDimensions();
    // This is terrible.
    let slides = [].slice.call(document.querySelectorAll(".slider-slide"));
    slides.forEach(slide => {
      slide.style.height = "100%";
    });
  }

  render() {
    const { description, title, styles } = exports.data;

    return (
      <div className="portfolio">
        <Helmet>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <title>{title}</title>
        </Helmet>
        <div className="portfolio-carousel" style={styles}>
          <Carousel decorators={[]} ref={node => (this.carousel = node)}>
            <img
              src="/images/milestones/computer.png"
              onLoad={this.handleLoadedImage}
            />
            <div className="video-container">
              <video className="video-player" autoPlay loop>
                <source src="/videos/nomad.mp4" type="video/mp4" />
              </video>
            </div>
          </Carousel>
        </div>
        <div className="content-container">
          <h1 className="page-title">{"Milestones"}</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-4">
              <p>
                {
                  "Spender is personal project, where I’m keeping track of my spending through a simple iOS app."
                }
              </p>
              <p>
                {
                  "Mint is great, but it doesn’t keep track of cash spending. And all the other different spending trackers out there didn’t meet my specific needs."
                }
              </p>
              <p>{"So I’m building my own version."}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
