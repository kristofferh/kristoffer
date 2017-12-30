import React, { Component } from "react";
import Helmet from "react-helmet";

import Carousel from "components/carousel";
import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  order: 0,
  title: "Nomad",
  color: "purple",
  description: "Fixing one part of a broken health system.",
  media: [
    {
      type: "image",
      src: "/images/nomad/computer-phone.png",
      placeholder: "/images/nomad/computer-phone-small.png",
      aspectRatio: 0.66666
    },
    {
      type: "video",
      src: "/videos/nomad-logged-out.mp4",
      aspectRatio: 9 / 16,
      videoType: "video/mp4",
      attributes: { autoPlay: true, loop: true, playsInline: true }
    }
  ],
  styles: {
    background: "#fafafa"
  }
};

export default class Nomad extends Component {
  constructor() {
    super();
  }

  render() {
    const { description, title, styles, media } = data;

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
          <Carousel cellSpacing={0}>
            {media.map((item, index) => {
              if (item.type === "image") {
                return (
                  <div className="carousel-item-wrapper" key={index}>
                    <ImageLoader img={item.src} />
                  </div>
                );
              } else if (item.type === "video") {
                return (
                  <div className="carousel-item-wrapper" key={index}>
                    <DeviceFrame>
                      <video className="video-player" {...item.attributes}>
                        <source src={item.src} type={item.videoType} />
                      </video>
                    </DeviceFrame>
                  </div>
                );
              }
            })}
          </Carousel>
        </div>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">
                {
                  "Nomad is a healtcare marketplace for doctors and nurses, and the people that hire them."
                }
              </p>
              <p className="load-in">
                {
                  "It’s a big industry, fraught with all the issues that plague the rest of the healthcare system in the United States: slow moving bureaucracy, inefficiencies galore, technology from 1988, and everything is way more expensive than it needs to be. We’re changing all that."
                }
              </p>
              <p className="load-in">
                {
                  "We are building a healthcare marketplace that is easy to navigate, user-friendly, efficient, and most importantly:"
                }{" "}
                <span className="highlight">
                  {"much cheaper for everyone."}
                </span>
              </p>
              <p className="load-in">{"It’s like it’s not 1988 anymore!"}</p>
            </div>
            <div className="col-xs-12 col-sm-4 first-sm">
              <ImageLoader
                placeholder={"/images/nomad/hello-small.png"}
                aspectRatio={1}
                img={"/images/nomad/hello.png"}
              />
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#f0f8ff" }}
            >
              <DeviceFrame type="tablet">
                <ImageLoader
                  img="/images/nomad/search-unlaunched@2x.png"
                  placeholder="/images/nomad/search-unlaunched-small.png"
                  aspectRatio={2628 / 2880}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
              <h2 className="sub-title load-in">{"What Do I Do There?"}</h2>
              <p className="load-in">{"A little bit of everything."}</p>
              <p className="load-in">
                {
                  "I have a unique hybrid role at Nomad: I’m an Art Director and, at the same time, I am the Lead Product Engineer. I spent half of my time designing features, and the other half building them."
                }
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#fff0fb" }}
            >
              <ImageLoader
                className="portfolio-media-item-phone load-in load-in--sequence-1"
                img="/images/nomad/dashboard-mobile.png"
                aspectRatio={727 / 385}
              />
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f8f8ff" }}
            >
              <ImageLoader
                className="portfolio-media-item-phone load-in load-in--sequence-2"
                img="/images/nomad/search-mobile.png"
                aspectRatio={727 / 385}
              />
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#fffaf0" }}
            >
              <ImageLoader
                className="portfolio-media-item-phone load-in load-in--sequence-3"
                img="/images/nomad/public-facility-mobile.png"
                aspectRatio={727 / 385}
              />
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#FFF8DA" }}
            >
              <ImageLoader
                className="portfolio-media-item-browser load-in"
                img="/images/nomad/post-a-job.png"
                aspectRatio={1024 / 1440}
              />
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row around-sm">
            <div className="col-xs-6 col-sm-4 portfolio-copy--second-row">
              <h2 className="sub-title load-in">{"Design"}</h2>
              <ul className="no-bullet-list">
                <li className="load-in">UI / UX Design</li>
                <li className="load-in">Print / Marketing Material</li>
                <li className="load-in">Sketch</li>
                <li className="load-in">Adobe Illustrator</li>
                <li className="load-in">Adobe Photoshop</li>
                <li className="load-in">Abstract</li>
                <li className="load-in">Invision</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-4 portfolio-copy--second-row">
              <h2 className="sub-title load-in">{"Tech"}</h2>
              <ul className="no-bullet-list">
                <li className="load-in">React</li>
                <li className="load-in">Redux</li>
                <li className="load-in">Webpack 3</li>
                <li className="load-in">Python / Flask</li>
                <li className="load-in">SCSS</li>
                <li className="load-in">MongoDB</li>
                <li className="load-in">Backbone.js</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#fafafa" }}
            >
              <ImageLoader
                className="portfolio-media-item-browser load-in"
                img="/images/nomad/public-facility.png"
                aspectRatio={1024 / 1440}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
