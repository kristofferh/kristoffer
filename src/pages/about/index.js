import React from "react";

import ImageLoader from "../../components/image-loader";
import Layout from "../../components/layouts";

import shuffle from "../../utils/shuffle-array";

import "./styles.scss";

export const frontmatter = {
  title: "About",
  color: "pink",
  description:
    "My name is Kristoffer Hedstrom. I'm originally from Umeå, Sweden, but now live in Switzerland. I make interactive things on the internet.",
  images: [
    {
      small: "/images/about/shakey-0-small.jpg",
      big: "/images/about/shakey-0.gif",
    },
    {
      small: "/images/about/shakey-1-small.jpg",
      big: "/images/about/shakey-1.gif",
    },
    {
      small: "/images/about/shakey-2-small.jpg",
      big: "/images/about/shakey-2.gif",
    },
    {
      small: "/images/about/shakey-3-small.jpg",
      big: "/images/about/shakey-3.gif",
    },
    {
      small: "/images/about/shakey-4-small.jpg",
      big: "/images/about/shakey-4.gif",
    },
    {
      small: "/images/about/shakey-5-small.jpg",
      big: "/images/about/shakey-5.gif",
    },
    {
      small: "/images/about/shakey-6-small.jpg",
      big: "/images/about/shakey-6.gif",
    },
    {
      small: "/images/about/shakey-7-small.jpg",
      big: "/images/about/shakey-7.gif",
    },
  ],
};

const About = (props) => {
  const { images } = frontmatter;
  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="about-photos">
        {shuffle(images)
          .slice(0, 3)
          .map((image, i) => (
            <ImageLoader
              key={i}
              className="about-photo"
              placeholder={image.small}
              aspectRatio={1}
              img={image.big}
              imageProps={{
                alt: "GIF of Kris",
              }}
            />
          ))}
      </div>
      <div className="content-container">
        <h1 className="page-title load-in">About</h1>
        <div className="row between-xs">
          <div className="module col-xs-12 col-sm-8">
            <h2 className="sub-title load-in">Bio</h2>
            <div>
              <p className="load-in">
                Hey. I’m Kris. I’m an interactive designer / developer. Like my
                ancestors, I make interactive things on the internet.
              </p>
              <p className="load-in">
                I grew up in Umeå, in northern Sweden, but now live in Zürich,
                Switzerland with my wife{" "}
                <a
                  href="https://sarfrazi.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="highlight"
                >
                  Razi
                </a>{" "}
                and our dog Frankie. I spent more than twenty years in the
                United States, the first fourteen in Seattle, and then Brooklyn,
                NY for eight.
              </p>
              <p className="load-in">
                I am currently employed by Google. Before Google, I worked at a
                small-ish startup. Before that, I was a Product (Engineering)
                Manager at Tumblr. Before that, I worked at agencies. Before
                that, I was a baby.
              </p>
              <p className="load-in">
                I like to design things, and then I like to build those things.
              </p>
              <p className="load-in">
                I occasionally take on freelance projects. Feel free to get in
                touch if you have an interesting project that you want to
                collaborate on. Or if you just want to say{" "}
                <a
                  className="highlight"
                  href="mailto:hello@k-create.com?subject=hi"
                >
                  hello
                </a>
                , that’s cool too.
              </p>
            </div>
          </div>
          <div className="module col-xs-12 col-sm-3">
            <h2 className="sub-title load-in">{"Elsewhere"}</h2>
            <ul className="no-bullet-list social-links">
              <li className="load-in">
                <a
                  href="https://github.com/kristofferh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="load-in">
                <a
                  href="https://codepen.io/kristofferh/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Codepen
                </a>
              </li>
              <li className="load-in">
                <a
                  href="http://kris.tumblr.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tumblr
                </a>
              </li>
              <li className="load-in">
                <a
                  href="https://twitter.com/_kris"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li className="load-in">
                <a
                  href="https://www.toptal.com/designers/resume/kristoffer-hedstrom"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Toptal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
