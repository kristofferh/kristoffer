import "babel-polyfill";
import classNames from "classnames";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import BodyClassName from "react-body-classname";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import Navigation from "../../components/navigation";
import { ThemeContext } from "../../context/theme";
import "../../styles/base.scss";
import "../../styles/fonts/tanek.scss";
import "../../styles/fonts/tiempos.scss";

if (typeof window !== "undefined") {
  require("intersection-observer");
}

export default class Template extends Component {
  static defaultProps = {
    frontmatter: {}
  };

  static contextType = ThemeContext;

  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    frontmatter: PropTypes.object
  };

  loadElements() {
    const els = document.querySelectorAll(".load-in:not(.visible)");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting, intersectionRatio } = entry;
        if (isIntersecting === true || intersectionRatio > 0) {
          entry.target.classList.add("visible");
        }
      });
    });
    Array.from(els).forEach(el => {
      observer.observe(el);
    });
  }

  componentDidMount() {
    this.loadElements();
  }

  componentDidUpdate() {
    this.loadElements();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            site {
              siteMetadata {
                siteTitle
                description
                twitter
                shareImage
                url
                siteName
                name
                email
              }
            }
          }
        `}
        render={data => {
          const { location, children, frontmatter } = this.props;
          const colors = ["green", "blue", "orange", "pink"];
          const defaultColor =
            colors[Math.floor(Math.random() * colors.length)];
          const config = data.site.siteMetadata;
          const { name, email } = config;
          const color = frontmatter.color || defaultColor;
          const { theme } = this.context;
          return (
            <>
              <BodyClassName
                className={classNames(color, { "dark-mode": theme === "dark" })}
              />
              <Helmet
                meta={[
                  {
                    name: "description",
                    content: frontmatter.description || config.description
                  },
                  {
                    property: "og:url",
                    content: `${config.url}${location.pathname}`
                  },
                  { property: "og:type", content: "website" },
                  {
                    property: "og:title",
                    content: frontmatter.title
                      ? `${frontmatter.title} - ${config.siteTitle}`
                      : config.siteTitle
                  },
                  { property: "og:site_name", content: config.siteTitle },
                  { property: "og:image", content: config.shareImage },
                  {
                    property: "og:description",
                    content: frontmatter.description || config.description
                  },
                  {
                    name: "twitter:title",
                    content: frontmatter.title
                      ? frontmatter.title
                      : config.siteTitle
                  },
                  { name: "twitter:card", content: "summary_large_image" },
                  { name: "twitter:site", content: config.twitter },
                  { name: "twitter:creator", content: config.twitter },
                  {
                    name: "twitter:description",
                    content: frontmatter.description || config.description
                  },
                  { name: "twitter:image", content: config.shareImage }
                ]}
                titleTemplate={`%s - ${config.siteTitle}`}
                title={frontmatter.title || config.siteName}
              />
              <Logo location={location} />
              <Navigation {...frontmatter} {...this.props} />
              <section className="content-wrapper">{children}</section>
              <Footer name={name} email={email} />
            </>
          );
        }}
      />
    );
  }
}
