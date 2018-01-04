import React, { Component } from "react";

import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  order: 3,
  title: "Archive",
  color: "pink",
  description: "Older projects.",
  media: [
    {
      type: "image",
      src: "/images/archive/archive-header.png",
      aspectRatio: 0.5043
    }
  ],
  styles: {
    background: "linear-gradient(80deg, rgb(45, 104, 201), rgb(65, 64, 98))",
    backgroundPosition: "100%"
  }
};

export default class Archive extends Component {
  render() {
    const { title, styles } = data;

    return (
      <div className="portfolio">
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item portfolio-media-item--flush-bottom"
              style={styles}
            >
              <ImageLoader
                img="/images/archive/archive-header.png"
                aspectRatio={706 / 1400}
              />
            </div>
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-8">
              <p className="load-in">
                {
                  "Older projects. Freelance and agency work. From the olden times."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#0a0501" }}
            >
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  placeholder="/images/archive/project-rebrief-small.jpg"
                  img="/images/archive/project-rebrief.jpg"
                  aspectRatio={4980 / 980}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f2706f" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/raleigh-1.jpg"
                  placeholder="/images/archive/raleigh-1-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#90a0d1" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/zeitgeist-1.jpg"
                  placeholder="/images/archive/zeitgeist-1-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#fbfafa" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/gw2.jpg"
                  placeholder="/images/archive/gw2-small.jpg"
                  aspectRatio={1000 / 1400}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#fbfafa" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/gw2-races.jpg"
                  placeholder="/images/archive/gw2-races-small.jpg"
                  aspectRatio={1000 / 1400}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#fcc013" }}
            >
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  img="/images/archive/tictail.jpg"
                  placeholder="/images/archive/tictail-small.jpg"
                  aspectRatio={7596 / 2560}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/vw-canada-1.jpg"
                  placeholder="/images/archive/vw-canada-1-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f1f1f4" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/archive/al-jazeera-1.jpg"
                  placeholder="/images/archive/zeitgeist-1-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#363636" }}
            >
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  img="/images/archive/gw-products-individual.jpg"
                  placeholder="/images/archive/gw-products-individual-small.jpg"
                  aspectRatio={1800 / 1400}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
