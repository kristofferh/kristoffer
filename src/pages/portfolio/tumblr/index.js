import React, { Component } from "react";
import DeviceFrame from "../../../components/device-frame";
import ImageLoader from "../../../components/image-loader";
import Layout from "../../../components/layouts";
import { ThemeContext } from "../../../context/theme";

export const frontmatter = {
  portfolio: true,
  order: 1,
  title: "Tumblr",
  color: "purple",
  description: "Making teenagers mad, one project at a time.",
  path: "/portfolio/tumblr",
  media: [
    {
      type: "image",
      img: "/images/tumblr/tumblr-poster.png",
      placeholder: "/images/tumblr/tumblr-poster-small.png",
      aspectRatio: 0.75,
    },
  ],
  styles: {
    background: "#f5f6f7",
  },
  darkStyles: {
    background: "#47525d",
  },
};

export default class Tumblr extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.tumblr.com/post.js");
    script.id = "tumblr-embed";
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const embed = document.getElementById("tumblr-embed");
    if (embed) {
      embed.remove();
    }
  }

  render() {
    const { title, styles, darkStyles, media } = frontmatter;
    const { theme } = this.context;
    return (
      <Layout {...this.props} frontmatter={frontmatter}>
        <div className="portfolio">
          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={theme === "dark" ? darkStyles : styles}
            >
              <ImageLoader
                {...media[0]}
                styles={{
                  maxWidth: 800,
                  margin: "auto",
                }}
                imageProps={{
                  alt: title,
                }}
              />
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                <h1 className="page-title load-in">{title}</h1>
                <p className="load-in">
                  I spent three and half years at Tumblr. Starting as a Product
                  Engineer, pre-Yahoo, then became an Engineering Manager, and
                  finally morphing into a Product Manager role.
                </p>
                <p className="load-in">
                  I worked on a variety of different projects: creation tools{" "}
                  <em>{"Optica"}</em> (now Official) – the default theme,
                  embeddable posts, reblog redesign, and many others.
                </p>
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div
              className="portfolio-media-item"
              style={{ background: "#f8f8f8" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/tumblr/optica-new.jpg"
                  placeholder="/images/tumblr/optica-new-small.jpg"
                  aspectRatio={2000 / 2560}
                  imageProps={{
                    alt: "Optica screenshot.",
                  }}
                />
              </DeviceFrame>
            </div>
          </section>

          <section className="content-container">
            <div className="row">
              <section className="col-xs-12 col-sm-8 col-sm-offset-2">
                <h2 className="sub-title load-in">Optica</h2>
                <p className="load-in">
                  <em>Optica</em>, now renamed <em>Official</em>, is the default
                  theme that everyone is assigned when they create a Tumblr
                  blog. It’s also the default mobile theme.
                </p>
                <p className="load-in">It has an obscene amount of installs.</p>
              </section>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#dbe0ea" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/tumblr/optica-old-desktop.jpg"
                    placeholder="/images/tumblr/optica-old-desktop-small.jpg"
                    aspectRatio={1283 / 1772}
                    imageProps={{
                      alt: "Old version of Optica screenshot.",
                    }}
                  />
                </DeviceFrame>
              </div>
              <div
                className="col-xs-12 col-sm-6 portfolio-media-item"
                style={{ background: "#dbe0ea" }}
              >
                <DeviceFrame>
                  <ImageLoader
                    img="/images/tumblr/optica-installs.jpg"
                    placeholder="/images/tumblr/optica-installs-small.jpg"
                    aspectRatio={918 / 1332}
                    imageProps={{
                      alt: "Number of installs.",
                    }}
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
                  Embeddable posts are Tumblr posts that can be embedded on
                  third party sites. I essentially re-created posts in a
                  light-weight, fully responsive way, with all the interactivity
                  you’d expect - like, reblog, etc.
                </p>
                <p className="load-in">
                  A week after they were launched, Buzzfeed posted the{" "}
                  <em>Dress</em> article, which was an embedded Tumblr posts.
                  It’s the most viewed Buzzfeed article of all time (or at least
                  it was at the time).
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

          <section className="content-container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2 className="sub-title load-in">Product Management</h2>
                <p className="load-in">
                  I spend the last year of my time at Tumblr working as a
                  Product Manager. My team, <em>Identity</em>, was focused
                  mainly on personalizing and making Tumblr as creative as you
                  are. We worked on a few huge projects (reblog redesign was
                  years in the making), and our users loved it.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <ImageLoader
                  className="tumblr-fans load-in"
                  placeholder={"/images/tumblr/fans-small.jpg"}
                  aspectRatio={650 / 300}
                  img={"/images/tumblr/fans.jpg"}
                  imageProps={{
                    alt: "Screenshot of happy users.",
                  }}
                />
                <ImageLoader
                  className="tumblr-fans load-in"
                  placeholder={"/images/tumblr/fans-2-small.jpg"}
                  aspectRatio={204 / 299}
                  img={"/images/tumblr/fans-2.jpg"}
                  imageProps={{
                    alt: "Another screenshot of happy users.",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="portfolio-media">
            <div className="row">
              <div
                className="col-xs-12 col-sm-4 portfolio-media-item"
                style={{ background: "#fecad1" }}
              >
                <ImageLoader
                  className="big-shadow"
                  placeholder={"/images/tumblr/reblog-small.jpg"}
                  aspectRatio={1}
                  img={"/images/tumblr/reblog.gif"}
                  imageProps={{
                    alt: "GIF of reblog announcement.",
                  }}
                />
              </div>
              <div
                className="col-xs-12 col-sm-4 portfolio-media-item"
                style={{ background: "#40b17d" }}
              >
                <ImageLoader
                  className="big-shadow"
                  placeholder={"/images/tumblr/related-posts-small.jpg"}
                  aspectRatio={405 / 540}
                  img={"/images/tumblr/related-posts.gif"}
                  imageProps={{
                    alt: "GIF of related posts announcement.",
                  }}
                />
              </div>
              <div
                className="col-xs-12 col-sm-4 portfolio-media-item"
                style={{ background: "#f5ce64" }}
              >
                <ImageLoader
                  className="big-shadow"
                  placeholder={"/images/tumblr/likes-small.jpg"}
                  aspectRatio={1}
                  img={"/images/tumblr/likes.gif"}
                  imageProps={{
                    alt: "GIF of likes announcement.",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
