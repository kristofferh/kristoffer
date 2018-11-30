import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { graphql } from "gatsby";

import groupsOf from "../../utils/groups-of";

import Layout from "../../components/layouts";
import ImageLoader from "../../components/image-loader";

import "./styles.scss";

export const frontmatter = {
  title: "Portfolio",
  color: "orange",
  description: "Kristoffer Hedstrom's Portfolio."
};

const PortfolioIndex = ({ data, ...rest }) => {
  const pageLinks = data.portfolio.edges.map(({ node: page }) => {
    const { styles, title, path } = page.frontmatter;
    const media =
      page.frontmatter.media &&
      page.frontmatter.media.find(item => item.type === "image");
    return (
      <div key={path} className="portfolio-item col-xs-12 col-sm-4">
        <Link to={path} className="portfolio-item-link">
          <div className="portfolio-item-image" style={styles}>
            {media && (
              <ImageLoader
                imageProps={{ alt: title }}
                className="portfolio-item-preview"
                img={media.img}
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
    <Layout {...rest} frontmatter={frontmatter}>
      <div className="content-container">
        <h1 className="page-title">{"Selected bits"}</h1>
        <div className="portfolio-items">{groups}</div>
      </div>
    </Layout>
  );
};

PortfolioIndex.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query portfolioQuery {
    portfolio: allJavascriptFrontmatter(
      filter: { frontmatter: { portfolio: { eq: true } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            styles {
              background
            }
            order
            description
            media {
              type
              img
              aspectRatio
              placeholder
            }
          }
        }
      }
    }
  }
`;

export default PortfolioIndex;
