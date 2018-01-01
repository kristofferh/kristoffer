import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import BodyClassName from "react-body-classname";
import { config } from "config";
import "intersection-observer";

import Logo from "components/logo";
import Navigation from "components/navigation";
import Footer from "components/footer";

export default class Template extends Component {
  componentWillReceiveProps() {
    // `path` is an array of tree node indexes
    // const direction = newProps.path.length > this.props.path.length ?
    //   'right' : 'left';
    //this.setState({direction});
  }

  loadElements() {
    const els = [...document.querySelectorAll(".load-in:not(.visible)")];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting === true || intersectionRatio > 0) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5
      }
    );
    els.forEach(el => {
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
    const colors = ["green", "blue", "orange", "pink"];
    const defaultColor = colors[Math.floor(Math.random() * colors.length)];

    const page = this.props.children.props.route.page.data;
    const path = this.props.children.props.route.page.path;
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
            { property: "og:url", content: `${config.url}${path}` },
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
          title={page.title}
        />
        <Logo />
        <Navigation {...this.props} />
        <section className="content-wrapper">{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};
