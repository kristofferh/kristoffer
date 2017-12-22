import React from "react";
import ImageLoader from "components/image-loader";

import shuffle from "utils/shuffle-array";

import "./styles.scss";

exports.data = {
  title: "About",
  color: "pink",
  description:
    "My name is Kristoffer Hedstrom. I'm originally from Umeå, Sweden, but now live in Brooklyn. I make interactive things on the internet.",
  images: [
    {
      small: "/images/about/shakey-0-small.jpg",
      big: "/images/about/shakey-0.gif"
    },
    {
      small: "/images/about/shakey-1-small.jpg",
      big: "/images/about/shakey-1.gif"
    },
    {
      small: "/images/about/shakey-2-small.jpg",
      big: "/images/about/shakey-2.gif"
    },
    {
      small: "/images/about/shakey-3-small.jpg",
      big: "/images/about/shakey-3.gif"
    },
    {
      small: "/images/about/shakey-4-small.jpg",
      big: "/images/about/shakey-4.gif"
    },
    {
      small: "/images/about/shakey-5-small.jpg",
      big: "/images/about/shakey-5.gif"
    },
    {
      small: "/images/about/shakey-6-small.jpg",
      big: "/images/about/shakey-6.gif"
    },
    {
      small: "/images/about/shakey-7-small.jpg",
      big: "/images/about/shakey-7.gif"
    }
  ]
};

const About = () => {
  const { images } = exports.data;
  return (
    <div>
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
            />
          ))}
      </div>
      <div className="content-container">
        <h1 className="page-title">{"About"}</h1>
        <div className="row between-xs">
          <div className="module col-xs-12 col-sm-8">
            <h2 className="sub-title">{"Bio"}</h2>
            <p>{"Hey. I’m Kris. I’m an interactive designer / developer."}</p>

            <p>
              {
                "I grew up in Umeå, in northern Sweden, but I now live in Brooklyn, NY. I am currently enjoying a hybrid Art Director + Lead Product Engineer role at a small startup called Nomad Health. Before that, I was a Product (Engineering) Manager at Tumblr. Before that, I worked at agencies. Before that, I was a baby."
              }
            </p>

            <p>
              {
                "I like to design things, and then I like to build those things."
              }
            </p>

            <p>
              {
                "I occasionally take on freelance projects. Feel free to get in touch if you have an interesting project that you want to collaborate on. Or if you just want to say "
              }
              <a
                className="highlight"
                href="mailto:hello@k-create.com?subject=hi"
              >
                {"hello"}
              </a>
              {", that’s cool too."}
            </p>
          </div>
          <div className="module col-xs-12 col-sm-3">
            <h2 className="sub-title">{"Elsewhere"}</h2>
            <ul className="no-bullet-list social-links">
              <li>
                <a
                  href="https://github.com/kristofferh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Github"}
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/kristofferh/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Codepen"}
                </a>
              </li>
              <li>
                <a
                  href="http://kris.tumblr.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Tumblr"}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_kris"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Twitter"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
