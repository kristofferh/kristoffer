import {default as React, Component} from 'react';
import Helmet from 'react-helmet';

import {config} from 'config';

import 'styles/base';
import 'styles/fonts/tanek';
import 'styles/fonts/tiempos';

export default class Index extends Component {
  render() {
    return (
      <Helmet
          meta={[
            { name: 'description', content: config.description },
            { property: 'og:url', content: config.url },
            { property: 'og:type', content: 'blog' },
            { property: 'og:title', content: config.siteTitle },
            { property: 'og:site_name', content: config.siteTitle },
            { property: 'og:image', content: config.shareImage },
            { property: 'og:description', content: config.description },
            { name: 'twitter:title', content: config.siteTitle },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: config.twitter },
            { name: 'twitter:creator', content: config.twitter },
            { name: 'twitter:description', content: config.description },
            { name: 'twitter:image', content: config.shareImage }
          ]}
          defaultTitle={ config.siteTitle }
      />
    );
  }
}

Index.propTypes = {
  route: React.PropTypes.object
};
