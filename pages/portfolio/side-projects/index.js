import React, { Component } from "react";
import Helmet from "react-helmet";

import Carousel from "components/carousel";
import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  order: 1,
  title: "Side Projects",
  color: "purple",
  description: "In-progress personal projects",
  media: [
    {
      type: "image",
      src: "/images/nomad/computer-phone.png",
      placeholder: "/images/nomad/computer-phone-small.png",
      aspectRatio: 0.66666
    }
  ],
  styles: {
    background: "#fafafa"
  }
};

export default class SideProjects extends Component {
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
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/milestones-mobile.png"
                  placeholder="/images/side-projects/milestones-mobile-small.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-8 portfolio-media-item"
              style={{ background: "#b4bde9" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/side-projects/milestones@2x.png"
                  placeholder="/images/side-projects/milestones-small.png"
                  aspectRatio={1342 / 2560}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-8">
              <p className="load-in">
                {
                  "I start a lot of side projects. Some make it further than others. This is a sampling."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/spender-splash.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f1f1f4" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/side-projects/spender-overview.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#222" }}
            >
              <DeviceFrame className="load-in" styles={{ maxWidth: 720 }}>
                <video className="video-player" autoPlay loop playsInline>
                  <source src="/videos/krisandrazi.mp4" type="video/mp4" />
                </video>
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row around-sm">
            <div className="col-xs-6 col-sm-4 portfolio-copy--second-row">
              <h2 className="sub-title load-in">{"Design"}</h2>
              <ul className="no-bullet-list">
                <li className="load-in">Sketch</li>
                <li className="load-in">Adobe Illustrator</li>
                <li className="load-in">Adobe Photoshop</li>
                <li className="load-in">Framer</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-4 portfolio-copy--second-row">
              <h2 className="sub-title load-in">{"Tech"}</h2>
              <ul className="no-bullet-list">
                <li className="load-in">React</li>
                <li className="load-in">React Native</li>
                <li className="load-in">Redux</li>
                <li className="load-in">Webpack 3</li>
                <li className="load-in">Node.js</li>
                <li className="load-in">SCSS</li>
                <li className="load-in">MySQL</li>
                <li className="load-in">GraphQL</li>
                <li className="load-in">AWS</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
