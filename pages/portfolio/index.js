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
        <Helmet
            meta={[
              { name: 'description', content: description },
              { property: 'og:description', content: description },
              { name: 'twitter:title', content: description },
              { name: 'twitter:description', content: 'Cool beans.' }
            ]}
            title={title}
        />
        <p>{'Portfolio Index'}</p>
        {pageLinks}
      </div>
    );
  }
}

PortfolioIndex.propTypes = {
  route: PropTypes.object
};