import React, { Component } from "react";

import Carousel from "components/carousel";
import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  order: 0,
  title: "Tumblr",
  color: "purple",
  description: "Making teenagers mad, one project at a time.",
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

export default class Tumblr extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.tumblr.com/post.js");
    document.body.appendChild(script);
  }

  render() {
    const { title, styles, media } = data;

    return (
      <div className="portfolio">
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
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h1 className="page-title load-in">{title}</h1>
              <p className="load-in">
                {
                  "I spent 3 and half years at Tumblr. Starting as a Product Engineer, pre-Yahoo, then became an Engineering Manager, and finally morphing into a Product Manager role."
                }
              </p>
              <p className="load-in">
                {"I worked on a variety of different projects: creation tools,"}{" "}
                <em>{"Optica"}</em>{" "}
                {
                  "(now Official) – the default theme, embeddable posts, reblog redesign, and many others."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#faf2e7" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/tumblr/optica-new.jpg"
                  placeholder="/images/tumblr/optica-new-small.jpg"
                  aspectRatio={2000 / 2560}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">{"Optica"}</h2>
              <p className="load-in">
                <em>Optica</em>, now renamed <em>Official</em>, is the default
                theme that everyone is assigned when they create a Tumblr blog.
                It’s also the default mobile theme.
              </p>
              <p className="load-in">It has an obscene amount of installs.</p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#dbe0e6" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/tumblr/optica-old-desktop.jpg"
                  placeholder="/images/tumblr/optica-old-desktop-small.jpg"
                  aspectRatio={1283 / 1772}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#e2e7ea" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/tumblr/optica-installs.jpg"
                  placeholder="/images/tumblr/optica-installs-small.jpg"
                  aspectRatio={918 / 1332}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Embeddable Posts</h2>
              <p className="load-in">
                Embeddable posts are Tumblr posts that can be embedded on third
                party sites. I essentially re-created posts in a light-weight,
                fully responsive way, with all the interactivity you’d expect -
                like, reblog, etc.
              </p>
              <p className="load-in">
                A week after they were launched, Buzzfeed posted the{" "}
                <em>Dress</em> article, which was an embedded Tumblr posts. It’s
                the most viewed Buzzfeed article of all time (or at least it was
                at the time).
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#f2f2f2" }}
            >
              <div className="tumblr-embed">
                <div
                  className="tumblr-post"
                  data-href="https://embed.tumblr.com/embed/post/0rX4DYTg1El5fckRMg17Tg/139124862228"
                  data-did="1b70adf2b0bb5ef3c5ac256e31b18864b5fef1f1"
                />
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 portfolio-media-item"
              style={{ background: "#ecafaf" }}
            >
              <div className="tumblr-embed">
                <div
                  className="tumblr-post"
                  data-href="https://embed.tumblr.com/embed/post/75Dmwi6xWV_PQIiRtNSswQ/167271168399"
                  data-did="da39a3ee5e6b4b0d3255bfef95601890afd80709"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2">
              <h2 className="sub-title load-in">Mobile Web</h2>
              <p className="load-in">
                The mobile web version of Tumblr was a neglected child for a
                long time. I was put in charge of revamping it. To do that, I
                hired a small team of engineers and got to work.
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
              <DeviceFrame type="phone">
                <video className="video-player" autoPlay loop playsInline>
                  <source
                    src="/videos/tumblr/post-forms.mp4"
                    type="video/mp4"
                  />
                </video>
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#f8f8ff" }}
            >
              <DeviceFrame type="phone--light">
                <video className="video-player" autoPlay loop playsInline>
                  <source src="/videos/tumblr/search.mp4" type="video/mp4" />
                </video>
              </DeviceFrame>
            </div>
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#fffaf0" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/tumblr/mobile-web.jpg"
                  placeholder="/images/tumblr/mobile-web-small.jpg"
                  aspectRatio={1004 / 594}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#FFF8DA" }}
            >
              <DeviceFrame className="load-in">
                <ImageLoader
                  img="/images/nomad/post-a-job@2x.png"
                  aspectRatio={1600 / 2880}
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
              <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
                <ImageLoader
                  placeholder="/images/nomad/public-profile-small.png"
                  img="/images/nomad/public-profile@2x.png"
                  aspectRatio={5418 / 2880}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
