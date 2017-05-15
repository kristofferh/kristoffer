import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';
import Helmet from 'react-helmet';
import access from 'safe-access';

import groupsOf from 'utils/groups-of';

import './styles';

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
      .filter(page => {
        if (/^(\/portfolio\/)(.+)/.test(page.path)) {
          return true;
        } else {
          return false;
        }
      })
      .map(page => {
        const image = access(page, 'data.image');
        const title = access(page, 'data.title') || page.path;
        return (
          <div key={page.path} className='portfolio-item col-xs-12 col-sm-4'>
            <Link to={prefixLink(page.path)}>
              {image && <img src={image} />}
              {title}
            </Link>
          </div>
        );
      });

    const groups = groupsOf(pageLinks, 3).map((page, i) =>
      <div key={i} className='between-sm row'>{page}</div>
    );

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
          {groups}
        </div>
      </div>
    );
  }
}

PortfolioIndex.propTypes = {
  route: PropTypes.object
};
