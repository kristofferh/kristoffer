import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Helmet from 'react-helmet';
import {config} from 'config';

import Navigation from 'components/navigation';
import Footer from 'components/footer';

module.exports = React.createClass({
  componentWillReceiveProps(newProps) {
    // `path` is an array of tree node indexes
    // const direction = newProps.path.length > this.props.path.length ?
    //   'right' : 'left';
    //this.setState({direction});
  },
  propTypes () {
    return {
      children: React.PropTypes.any
    };
  },
  render () {
    let page = this.props.children.props.route.page.data;
    let path = this.props.children.props.route.page.path;

    return (
      <div>
        <Helmet
            meta={[
              { name: 'description', content: page.description || config.description },
              { property: 'og:url', content: `${config.url}${path}` },
              { property: 'og:type', content: 'blog' },
              { property: 'og:title', content: (page.title) ? `${page.title} - ${config.siteTitle}` : config.siteTitle },
              { property: 'og:site_name', content: config.siteTitle },
              { property: 'og:image', content: config.shareImage },
              { property: 'og:description', content: page.description || config.description },
              { name: 'twitter:title', content: (page.title) ? page.title : config.siteTitle },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: config.twitter },
              { name: 'twitter:creator', content: config.twitter },
              { name: 'twitter:description', content: page.description || config.description },
              { name: 'twitter:image', content: config.shareImage }
            ]}
            titleTemplate={`%s - ${config.siteTitle}`}
            title={ page.title }
        />
        <Navigation {...this.props} />
        <section className='content-wrapper'>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
});
