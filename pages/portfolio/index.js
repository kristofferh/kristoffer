import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';

export default class PortfolioIndex extends Component {
  render () {

    const pages = this.props.route.pages;

    const pageLinks = pages
      .filter (page => {
        if (/^(\/portfolio\/)(.+)/.test(page.path)) {
          return true;
        } else {
          return false;
        }
      })
      .map (page => {
        const title = access(page, 'data.title') || page.path;

        return (
          <div key={page.path} className='portfolio-item'>
            <Link to={prefixLink(page.path)}>
              {title}
            </Link>
          </div>
        );
      });

    return (
      <div className='content-container'>
        <p>{'Portfolio Index'}</p>
        {pageLinks}
      </div>
    );
  }
}

PortfolioIndex.propTypes = {
  route: PropTypes.object
};
