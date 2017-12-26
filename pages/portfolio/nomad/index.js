import React, { Component } from "react";
import Helmet from "react-helmet";
import Carousel from "nuka-carousel";

import ImageLoader from "components/image-loader";

export const data = {
  order: 0,
  title: "Nomad",
  color: "purple",
  description: "Fixing one part of a broken health system.",
  media: [
    {
      type: "image",
      src: "/images/nomad/computer-phone.png",
      thumb: "/images/nomad/computer-phone-small.png",
      aspectRatio: 1
    },
    {
      type: "video",
      src: "/videos/nomad-logged-out.mp4",
      aspectRatio: 16 / 9,
      videoType: "video/mp4",
      attributes: { autoPlay: true, loop: true }
    }
  ],
  mediaRow: [
    {
      thumb: "/images/nomad/screen-0-small.png",
      src: "/images/nomad/screen-0.png"
    },
    {
      thumb: "/images/nomad/screen-1-small.png",
      src: "/images/nomad/screen-1.png"
    },
    {
      thumb: "/images/nomad/screen-2-small.png",
      src: "/images/nomad/screen-2.png"
    }
  ],
  styles: {
    background: "#fafafa"
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
    const { description, title, styles, media, mediaRow } = data;

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
            {media.map((item, index) => {
              if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={item.src}
                    onLoad={this.handleLoadedImage}
                  />
                );
              } else if (item.type === "video") {
                return (
                  <div className="video-container" key={index}>
                    <video
                      className="video-player big-shadow"
                      {...item.attributes}
                    >
                      <source src={item.src} type={item.videoType} />
                    </video>
                  </div>
                );
              }
            })}
          </Carousel>
        </div>
        <div className="content-container">
          <h1 className="page-title">{title}</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <ImageLoader
                placeholder={"/images/nomad/hello-small.png"}
                aspectRatio={1}
                img={"/images/nomad/hello.png"}
              />
            </div>
            <section className="col-xs-12 col-sm-8">
              <p>
                {
                  "Nomad is a healtcare marketplace for doctor and nurses, and the people that hire them."
                }
              </p>
              <p>
                {
                  "It’s a big industry, fraught with all the issues that plague the rest of the healthcare system in the United States: slow moving bureaucracy, inefficiencies galore, technology from 1988, and everything is way more expensive than it needs to be. We’re changing all that."
                }
              </p>
              <p>
                {
                  "We are building a healthcare marketplace that is easy to navigate, user-friendly, efficient, and most importantly:"
                }{" "}
                <span className="highlight">
                  {"much cheaper for everyone."}
                </span>
              </p>
              <p>{"It’s like it’s not 1988 anymore!"}</p>
            </section>
          </div>
        </div>
        <section className="portfolio-media-row">
          {mediaRow.map((image, i) => (
            <ImageLoader
              key={i}
              className="portfolio-media-item"
              placeholder={image.thumb}
              aspectRatio={1}
              img={image.src}
            />
          ))}
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 portfolio-copy--second-row">
              <h2 className="sub-title">{"What Do I Do There?"}</h2>
              <p>{"A little bit of everything."}</p>
              <p>
                {
                  "I have a unique hybrid role at Nomad: I’m an Art Director and, at the same time, I am the Lead Product Engineer. I spent half of my time designing features, and the other half building them."
                }
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media-row portfolio-media-row--dark">
          <div
            className="portfolio-media-item"
            style={{ background: "#fff0fb" }}
          >
            <ImageLoader
              className="portfolio-media-item--phone load-in"
              img="/images/nomad/phone.png"
              aspectRatio={727 / 385}
            />
          </div>
        </section>
      </div>
    );
  }
}
