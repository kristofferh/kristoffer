import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-link";
import access from "safe-access";

import groupsOf from "utils/groups-of";

import ImageLoader from "components/image-loader";

import "./styles.scss";

export const data = {
  title: "Portfolio",
  color: "orange",
  description: "Kristoffer Hedstrom's Portfolio."
};

export default class PortfolioIndex extends Component {
  render() {
    const pages = this.props.route.pages;

    const pageLinks = pages
      .filter(page => {
        if (/^(\/portfolio\/)(.+)/.test(page.path)) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        const orderA = access(a, "data.order");
        const orderB = access(b, "data.order");
        return orderA - orderB;
      })
      .map(page => {
        const media =
          page.data.media &&
          page.data.media.find(item => item.type === "image");
        const styles = access(page, "data.styles");
        const title = access(page, "data.title") || page.path;
        return (
          <div key={page.path} className="portfolio-item col-xs-12 col-sm-4">
            <Link to={page.path} className="portfolio-item-link">
              <div className="portfolio-item-image" style={styles}>
                {media && (
                  <ImageLoader
                    className="portfolio-item-preview"
                    img={media.src}
                  />
                )}
              </div>
              <span className="portfolio-item-text">{title}</span>
            </Link>
          </div>
        );
      });

    const groups = groupsOf(pageLinks, 3).map((page, i) => (
      <div key={i} className="row">
        {page}
      </div>
    ));

    return (
      <div className="content-container">
        <h1 className="page-title">{"Selected bits"}</h1>
        <div className="portfolio-items">{groups}</div>
      </div>
    );
  }
}

PortfolioIndex.propTypes = {
  route: PropTypes.object
};