import React, { Component } from "react";

import Layout from "../../../components/layouts";
import ImageLoader from "../../../components/image-loader";
import DeviceFrame from "../../../components/device-frame";

export const data = {
  portfolio: true,
  order: 3,
  title: "NCsoft",
  color: "pink",
  description: "Game-studio design work.",
  path: "/portfolio/ncsoft",
  media: [
    {
      type: "image",
      img: "/images/ncsoft/ncsoft-poster.png",
      placeholder: "/images/ncsoft/ncsoft-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  }
};

export default class NCsoft extends Component {
  render() {
    const { title, styles, media } = data;

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
                  NCsoft West is the US subsidiary of NCsoft - a South Korean
                  video game publisher. NCsoft West works with a number of video
                  game studios, developing mainly MMO games. My job was to
                  design marketing sites and installers.
                </p>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={{ background: "#f5f6f7" }}
            >
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  img="/images/ncsoft/gw2-home-2.0.jpg"
                  placeholder="/images/ncsoft/gw2-home-2.0-small.jpg"
                  aspectRatio={1700 / 1400}
                  imageProps={{
                    alt: "Guild Wars 2 screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
                <h2 className="sub-title load-in">Guild Wars 2</h2>
                <p className="load-in">
                  <em>Guild Wars 2</em> is the sequel to the popular MMORPG game
                  <em>Guild Wars</em>. The game itself has a pretty unique UI -
                  heavily inspired by the concept art created specifically for
                  the game. We wanted to carry that direction over to the site
                  as well, so we used lots of brushes, concept art, and
                  hand-written fonts to convey the same sort of painterly
                  quality.
                </p>
              </section>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f5f6f7" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/ncsoft/gw2.jpg"
                    placeholder="/images/ncsoft/gw2-small.jpg"
                    aspectRatio={1000 / 1400}
                    imageProps={{
                      alt: "Guild Wars 2 screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#f5f6f7" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/ncsoft/gw2-races.jpg"
                    placeholder="/images/ncsoft/gw2-races-small.jpg"
                    aspectRatio={1000 / 1400}
                    imageProps={{
                      alt: "Guild Wars 2 screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={{ background: "#f5f6f7" }}
            >
              <DeviceFrame
                styles={{
                  maxWidth: 800,
                  margin: "auto"
                }}
              >
                <ImageLoader
                  img="/images/ncsoft/gw2-characters-grid.jpg"
                  placeholder="/images/ncsoft/gw2-characters-grid-small.jpg"
                  aspectRatio={1000 / 1400}
                  imageProps={{
                    alt: "Guild Wars 2 screen."
                  }}
                />
              </DeviceFrame>
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
                <h2 className="sub-title load-in">Guild Wars</h2>
                <p className="load-in">
                  The aforementioned <em>Guild Wars</em> came out 7 years before{" "}
                  <em>Guild Wars 2</em>, but becuase of the sequal there was
                  renewed interested in the original, so I redesigned the
                  existing site. I wanted to maintain the focus on characters,
                  but make it a little more modern and responsive. The original
                  also felt much too cramped, so I tried to make the new version
                  a little airier.
                </p>
              </section>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#363636" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/ncsoft/gw-home-1.0.jpg"
                    placeholder="/images/ncsoft/gw-home-1.0-small.jpg"
                    aspectRatio={1000 / 1400}
                    imageProps={{
                      alt: "Guild Wars screen."
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#363636" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/ncsoft/gw-internal-page.jpg"
                    placeholder="/images/ncsoft/gw-internal-page-small.jpg"
                    aspectRatio={1000 / 1400}
                    imageProps={{
                      alt: "Guild Wars screen."
                    }}
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
                    imageProps={{
                      alt: "Guild Wars screen."
                    }}
                  />
                </DeviceFrame>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
