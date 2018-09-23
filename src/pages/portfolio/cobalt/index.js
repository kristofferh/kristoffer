import React, { Component } from "react";

import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  portfolio: true,
  order: 3,
  title: "Cobalt",
  color: "pink",
  description: "Automotive cobalt work.",
  path: "/portfolio/cobalt",
  media: [
    {
      type: "image",
      img: "/images/cobalt/cobalt-poster.png",
      placeholder: "/images/cobalt/cobalt-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

export default class Cobalt extends Component {
  render() {
    const { title, styles, media } = data;

    return (
      <div className="portfolio">
        <section className="portfolio-media">
          <div
            className="portfolio-media-item portfolio-media-item"
            style={styles}
          >
            <ImageLoader
              {...media[0]}
              styles={{
                maxWidth: 800,
                margin: "auto"
              }}
            />
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">
                Cobalt, now apart of ADP, is an cobalt that caters solely to the
                automotive industry. I joined a week before GM, Ford, and
                Chrysler had to be bailed out by the government and the industry
                was in turmoils.
              </p>
              <p className="load-in">
                I worked primarily on BMW and Volkswagen. There were unique
                design constraints: The brand guideline were fairly strict,
                there were pre-built and difficult to style internal components,
                so the challenge was to find a way for dealerships to
                distinguish themselves from one-another, having flexible
                options, while staying on brand. All while remembering the
                end-user - priority number one.
              </p>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f8f8f8" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/bmw-1.jpg"
                  placeholder="/images/cobalt/bmw-1-small.jpg"
                  aspectRatio={431 / 800}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f8f8f8" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/bmw-2.jpg"
                  placeholder="/images/cobalt/bmw-2-small.jpg"
                  aspectRatio={517 / 800}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ maxWidth: 1000, margin: "auto" }}
          >
            <ImageLoader
              img="/images/cobalt/bmw-wireframes.jpg"
              aspectRatio={1200 / 1600}
            />
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-1.jpg"
                  placeholder="/images/cobalt/vw-canada-1-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-2.jpg"
                  placeholder="/images/cobalt/vw-canada-2-small.jpg"
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
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-3.jpg"
                  placeholder="/images/cobalt/vw-canada-3-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/cobalt/vw-canada-4.jpg"
                  placeholder="/images/cobalt/vw-canada-4-small.jpg"
                  aspectRatio={500 / 700}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
