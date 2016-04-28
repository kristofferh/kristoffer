import React from 'react';
import DocumentTitle from 'react-document-title';
import BodyClassName from 'react-body-classname';

import { prefixLink } from 'gatsby-helpers';

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string
    };
  },
  render () {
    let title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    let color = BodyClassName.rewind();
    if (this.props.color) {
      color = this.props.color;
    } else {
      color = 'green';
    }

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel='stylesheet' href={prefixLink('/styles.css')} />;
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel='shortcut icon' href={this.props.favicon}/>
          {cssLink}
        </head>
        <body className={color}>
          <div id='react-mount' className='page-wrapper' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')}/>
        </body>
      </html>
    );
  }
});
