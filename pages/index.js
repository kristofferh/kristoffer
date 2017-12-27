import { default as React, Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import BodyClassName from "react-body-classname";

import { config } from "config";

import "styles/base";
import "styles/fonts/tanek";
import "styles/fonts/tiempos";

export default class Index extends Component {
  render() {
    const colors = ["green", "blue", "orange", "pink"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <BodyClassName className={color}>
        <div>
          <Helmet defaultTitle={config.siteTitle}>
            <meta name="description" content={config.description} />
            <meta property="og:url" content={config.url} />
            <meta property="og:type" content={"website"} />
            <meta property="og:title" content={config.siteTitle} />
            <meta property="og:site_name" content={config.siteTitle} />
            <meta property="og:image" content={config.shareImage} />
            <meta property="og:description" content={config.description} />
            <meta name="twitter:title" content={config.siteTitle} />
            <meta name="twitter:card" content={"summary_large_image"} />
            <meta name="twitter:site" content={config.twitter} />
            <meta name="twitter:creator" content={config.twitter} />
            <meta name="twitter:description" content={config.description} />
            <meta name="twitter:image" content={config.shareImage} />
          </Helmet>
        </div>
      </BodyClassName>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};
