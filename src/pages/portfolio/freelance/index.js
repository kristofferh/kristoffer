import React, { Component } from "react";

import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  portfolio: true,
  order: 2,
  title: "Freelance",
  color: "purple",
  description: "Freelance projects.",
  path: "/portfolio/freelance",
  media: [
    {
      type: "image",
      img: "/images/freelance/freelance-poster.png",
      placeholder: "/images/freelance/freelance-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

export default class Freelance extends Component {
  render() {
    const { title, styles, media } = data;

    return (
      <div className="portfolio">
        <section className="portfolio-media">
          <div
            className="portfolio-media-item portfolio-media-item--flush-bottom"
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
                I’ve been doing freelance, on-and-off, my entire career. I
                started doing it because I happened to graduate college right
                around the time the first IT bubble burst and it was difficult
                for me to find jobs, but I stuck with it because it’s fun.
                Nowadays I seldom take on new projects, but I occasionally get
                inspired. This section also includes side-projects and contract
                work.
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-splash.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-signin.png"
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
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-signin-verify.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-overview.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/spender-overlay.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Dubsmash</h2>
              <p className="load-in">
                I helped my friends at Dubsmash with their latest endeavor —{" "}
                <em>Quotes</em>. <em>Quotes</em> is a huge database of video
                clips ready to be shared. I designed a few screens for their
                landing page, and mobile web experience. I also contributed UX
                deliverables for their internal admin portal.
              </p>
            </section>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="tablet">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-tablet.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-tablet-small.jpg"
                  aspectRatio={2048 / 1536}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="tablet">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-tablet-embed.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-tablet-embed-small.jpg"
                  aspectRatio={2048 / 1536}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-mobile-web.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-mobile-web-small.jpg"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/freelance/dubsmash-quotes-mobile-web-search.jpg"
                  placeholder="/images/freelance/dubsmash-quotes-mobile-web-search.jpg"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="portfolio-media-item" style={{ background: "#111" }}>
            <DeviceFrame>
              <ImageLoader
                img="/images/freelance/dubsmash-quotes-full.jpg"
                placeholder="/images/freelance/dubsmash-quotes-full.jpg"
                aspectRatio={1024 / 1440}
              />
            </DeviceFrame>
          </div>
        </section>

        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/freelance/dubsmash-quote-wireframe-new.jpg"
                  placeholder="/images/freelance/dubsmash-quote-wireframe-new-small.jpg"
                  aspectRatio={1771 / 1440}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#111" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/freelance/dubsmash-quote-wireframe-edit.jpg"
                  placeholder="/images/freelance/dubsmash-quote-wireframe-edit-small.jpg"
                  aspectRatio={1453 / 1440}
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
              <p className="load-in">
                The focus is automation and quick access - not trying to
                replicate every single feature of a given device. The UI is
                purposely minimalist, with swipe actions to navigate between
                screens.
              </p>
              <p className="load-in">
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
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-home.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-room.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-living-room.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-webcam.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-thermostat.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-speaker.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-multiple-1.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-multiple-2.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#F1F2F3" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/freelance/control-room-settings.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Tictail</h2>
              <p className="load-in">
                I did a brief stint at Tictail, a Swedish ecommerce startup,
                leading one of the marketing teams.
              </p>
            </section>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
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
        </section>

        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Milestones</h2>
              <p className="load-in">
                A combination of a todo-list and a calendar. A side-project that
                I work on whenever I have time, which is seldom.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-4 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/milestones-mobile.png"
                  placeholder="/images/freelance/milestones-mobile-small.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-12 col-sm-8 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/side-projects/milestones@2x.png"
                  placeholder="/images/freelance/milestones-small.png"
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
