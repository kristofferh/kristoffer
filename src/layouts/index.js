import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import BodyClassName from "react-body-classname";
import graphql from "graphql";
import "babel-polyfill";

if (typeof window !== "undefined") {
  require("intersection-observer");
}

import "styles/base.scss";
import "styles/fonts/tanek.scss";
import "styles/fonts/tiempos.scss";

import Logo from "components/logo";
import Navigation from "components/navigation";
import Footer from "components/footer";

export default class Template extends Component {
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
    const { data, location } = this.props;
    let page = {};
    const colors = ["green", "blue", "orange", "pink"];
    const defaultColor = colors[Math.floor(Math.random() * colors.length)];
    const config = data.site.siteMetadata;
    const currentPage = data.allFile.edges.find(({ node }) => {
      return (
        node.relativeDirectory === location.pathname.replace(/^\/|\/$/g, "") &&
        node.childJsFrontmatter
      );
    });
    if (currentPage) {
      // Assign the nested object page coming from GraphQL to a new name
      const {
        node: { childJsFrontmatter: { data: currentPageData = {} } }
      } = currentPage;
      page = { ...currentPageData };
    }
    const color = page.color || defaultColor;

    return (
      <div>
        <BodyClassName className={color} />
        <Helmet
          meta={[
            {
              name: "description",
              content: page.description || config.description
            },
            {
              property: "og:url",
              content: `${config.url}${location.pathname}`
            },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: page.title
                ? `${page.title} - ${config.siteTitle}`
                : config.siteTitle
            },
            { property: "og:site_name", content: config.siteTitle },
            { property: "og:image", content: config.shareImage },
            {
              property: "og:description",
              content: page.description || config.description
            },
            {
              name: "twitter:title",
              content: page.title ? page.title : config.siteTitle
            },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: config.twitter },
            { name: "twitter:creator", content: config.twitter },
            {
              name: "twitter:description",
              content: page.description || config.description
            },
            { name: "twitter:image", content: config.shareImage }
          ]}
          titleTemplate={`%s - ${config.siteTitle}`}
          title={page.title || config.siteName}
        />

        <Logo {...page} {...this.props} />
        <Navigation {...page} {...this.props} />
        <section className="content-wrapper">{this.props.children()}</section>
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  data: PropTypes.object
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteTitle
        description
        twitter
        shareImage
        url
        siteName
      }
    }
    allFile {
      edges {
        node {
          relativeDirectory
          childJsFrontmatter {
            data {
              title
              color
              description
              nav
              order
            }
          }
        }
      }
    }
  }
`;
