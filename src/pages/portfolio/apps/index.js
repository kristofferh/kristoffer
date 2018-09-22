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
    background:
      "#A1A4BA radial-gradient(50% 102%, rgb(225, 202, 211, 0.25) 4%, #A1A4BA 100%)"
  }
};

export default class Apps extends Component {
  render() {
    const { title, styles } = data;

    return (
      <div className="portfolio">
        <section className="portfolio-media">
          <div
            className="portfolio-media-item portfolio-media-item--flush-bottom"
            style={styles}
          >
            <ImageLoader
              styles={{ maxWidth: 500, margin: "0 auto -1px" }}
              img="/images/apps/side-projects-header-alt.png"
              aspectRatio={394 / 768}
            />
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
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Spender</h2>
              <p className="load-in">
                <em>Spender</em> is a spending tracker. It connects to your bank
                accounts and lets you manually track cash transactions. I
                founded the project and am taking it from concept, to design, to
                development.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
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

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Control Room</h2>
              <p className="load-in">
                <em>Control Room</em> is simple-to-use smart-home app, which
                lets users get a quick idea of what’s happening at their home or
                office.
              </p>
              <p>
                The focus is automation and quick access - not trying to
                replicate every single feature of a given device. The UI is
                purposely minimalist, with swipe actions to navigate between
                screens.
              </p>
              <p>
                The goal is to include the most frequent use cases, and give the
                user an option to open the companion app for a device for more
                detailed views.
              </p>
            </section>
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
        </section>
        <section className="portfolio-media">
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
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Milestones</h2>
              <p className="load-in">
                A combination of a todo-list and a calendar. A side-project that
                I work on whenever I have time (never).
              </p>
            </section>
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
