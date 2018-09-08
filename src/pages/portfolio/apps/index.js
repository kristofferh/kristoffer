import React, { Component } from "react";

import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  portfolio: true,
  order: 2,
  title: "Mobile Apps",
  color: "purple",
  description: "Mobile applications, in various states of completion.",
  path: "/portfolio/apps",
  media: [
    {
      type: "image",
      src: "/images/apps/side-projects-header.png",
      placeholder: "/images/apps/side-projects-header-alt.png",
      aspectRatio: 0.344
    }
  ],
  styles: {
    background: "linear-gradient(80deg, #43D8A8, #BCBCEC)",
    backgroundSize: "201%",
    backgroundPosition: "100%"
  }
};

export default class Apps extends Component {
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
                styles={{ maxWidth: 500, margin: "0 auto -1px" }}
                img="/images/apps/side-projects-header-alt.png"
                aspectRatio={394 / 768}
              />
            </div>
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">
                Mobile applications. Freelance or side-projects.
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
                  img="/images/apps/spender-splash.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/apps/spender-signin.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/apps/spender-signin-verify.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/apps/spender-overview.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/apps/spender-overlay.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-home.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-room.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-living-room.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-webcam.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-thermostat.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-speaker.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-multiple-1.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-multiple-2.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/apps/control-room-settings.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/milestones-mobile.png"
                  placeholder="/images/apps/milestones-mobile-small.png"
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
                  placeholder="/images/apps/milestones-small.png"
                  aspectRatio={1342 / 2560}
                />
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
                <li className="load-in">Webpack</li>
                <li className="load-in">Node.js</li>
                <li className="load-in">SCSS</li>
                <li className="load-in">PostgreSQL</li>
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
