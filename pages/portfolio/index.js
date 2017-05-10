import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import access from 'safe-access';

exports.data = {
  title: 'Portfolio',
  color: 'orange',
  description: 'Kristoffer Hedstrom\'s Portfolio.'
};

export default class PortfolioIndex extends Component {
  render () {
    let {description, title} = exports.data;

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
        const title = access(page, 'data.image') || page.path;
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
        <Helmet>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:title' content={description} />
          <meta name='twitter:description' content={'cool beans'} />
          <title>{title}</title>
        </Helmet>
        <h1 className='page-title'>{'Selected bits'}</h1>
        <div className='portfolio-items'>
          {pageLinks}
        </div>
      </div>
    );
  }
}

PortfolioIndex.propTypes = {
  route: PropTypes.object
};
