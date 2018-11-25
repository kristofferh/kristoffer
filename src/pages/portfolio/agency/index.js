import React, { Component } from "react";

import Layout from "../../../components/layouts";
import ImageLoader from "../../../components/image-loader";
import DeviceFrame from "../../../components/device-frame";

export const frontmatter = {
  portfolio: true,
  order: 3,
  title: "Agency",
  color: "pink",
  description: "Interactive agency work.",
  path: "/portfolio/agency",
  media: [
    {
      type: "image",
      img: "/images/agency/agency-poster.png",
      placeholder: "/images/agency/agency-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

export default class Agency extends Component {
  render() {
    const { title, styles, media } = frontmatter;

    return (
      <Layout>
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
                imageProps={{
                  alt: title
                }}
              />
            </div>
          </section>
          <section className="content-container">
            <h1 className="page-title load-in">{title}</h1>
            <div className="row center">
              <div className="col-xs-12 col-sm-8">
                <p className="load-in">
                  I spent a few years working at interactive ad agencies, doing
                  client work for companies like <em>USA Today</em>,{" "}
                  <em>Google</em>, <em>Nintendo</em>, <em>Microsoft</em>, and
                  many others.
                </p>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={{ background: "#0a0501" }}
            >
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  placeholder="/images/agency/project-rebrief-full-small.jpg"
                  img="/images/agency/project-rebrief-full.jpg"
                  aspectRatio={4980 / 980}
                  imageProps={{
                    alt: "Project Re:Brief screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
                <h2 className="sub-title load-in">Fantasy (Interactive)</h2>
                <p className="load-in">
                  Fantasy is a small, but influential agency, known for their
                  high-level of design sophistication. I worked out of the New
                  York office as a Senior Developer, mainly focusing on frontend
                  heavy projects. Including a major redesign for{" "}
                  <em>USA Today</em>, embedding with the Gannett team in
                  Virginia. I also worked on several Google projects, including{" "}
                  <em>Project Re:Brief</em> — iconic advertising campaigns
                  reimagined for the 21st century, Google Zeitgeist and{" "}
                  <em>Think with Google</em>, and a Google Chrome app for
                  Al-Jazeera.
                </p>
              </section>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#0a0501" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/project-rebrief-1.jpg"
                    placeholder="/images/agency/project-rebrief-1-small.jpg"
                    aspectRatio={500 / 700}
                    imageProps={{
                      alt: "Project Re:Brief screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#0a0501" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/project-rebrief-2.jpg"
                    placeholder="/images/agency/project-rebrief-2-small.jpg"
                    aspectRatio={500 / 700}
                    imageProps={{
                      alt: "Project Re:Brief screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f4f4f4" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/usa-today-1.jpg"
                    placeholder="/images/agency/usa-today-1-small.jpg"
                    aspectRatio={560 / 877}
                    imageProps={{
                      alt: "USA Today screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f4f4f4" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/usa-today-2.jpg"
                    placeholder="/images/agency/usa-today-2-small.jpg"
                    aspectRatio={560 / 877}
                    imageProps={{
                      alt: "USA Today screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div className="col-xs-12 col-sm-6 portfolio-media-item">
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/think-with-google-1.jpg"
                    placeholder="/images/agency/think-with-google-1-small.jpg"
                    aspectRatio={1765 / 1280}
                    imageProps={{
                      alt: "Think with Google screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div className="col-xs-12 col-sm-6 portfolio-media-item">
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/think-with-google-2.jpg"
                    placeholder="/images/agency/think-with-google-2-small.jpg"
                    aspectRatio={1087 / 1280}
                    imageProps={{
                      alt: "Think with Google screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#90a0d1" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/zeitgeist-1.jpg"
                    placeholder="/images/agency/zeitgeist-1-small.jpg"
                    aspectRatio={500 / 700}
                    imageProps={{
                      alt: "Google Zeitgeist screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f1f1f4" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/al-jazeera-1.jpg"
                    placeholder="/images/agency/zeitgeist-1-small.jpg"
                    aspectRatio={500 / 700}
                    imageProps={{
                      alt: "Google Zeitgeist screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
                <h2 className="sub-title load-in">POP</h2>
                <p className="load-in">
                  POP is a Seattle based agency, working with a variety of
                  companies and brands. I did two stints at POP, working on a
                  range of projects — from fine-arts to digital entertainment.
                  One of my first projects was for Microsoft, building out the
                  welcome screen for their brand new browser - Internet Explorer
                  7! (this was in 2007).
                </p>
              </section>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#1e1e1e" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/pokemon-black-white-1.jpg"
                    placeholder="/images/agency/pokemon-black-white-1-small.jpg"
                    aspectRatio={1000 / 1415}
                    imageProps={{
                      alt: "Pokemon Black and White screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#1e1e1e" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/pokemon-black-white-2.jpg"
                    placeholder="/images/agency/pokemon-black-white-2-small.jpg"
                    aspectRatio={1000 / 1709}
                    imageProps={{
                      alt: "Pokemon Black and White screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f2706f" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/raleigh-1.jpg"
                    placeholder="/images/agency/raleigh-1-small.jpg"
                    aspectRatio={500 / 700}
                    imageProps={{
                      alt: "Raleigh screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#ade1e5" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/agency/nintendo-ds-1.jpg"
                    placeholder="/images/agency/nintendo-ds-1-small.jpg"
                    aspectRatio={1000 / 1400}
                    imageProps={{
                      alt: "Nintendo DS Lite screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={{ background: "#383838" }}
            >
              <DeviceFrame
                bodyStyles={{ maxHeight: 800 }}
                styles={{ maxWidth: 768 }}
              >
                <ImageLoader
                  img="/images/agency/royal-opera-house-1.jpg"
                  placeholder="/images/agency/royal-opera-house-1-small.jpg"
                  aspectRatio={994 / 768}
                  imageProps={{
                    alt: "Royal Opera House screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
