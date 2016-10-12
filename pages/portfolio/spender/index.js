import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';

export default class Spender extends Component {
  render () {
    let description = 'Spender';
    const pages = this.props.route.pages;

    return (
      <div className='content-container'>
        <Helmet
            meta={[
              { name: 'description', content: description },
              { property: 'og:description', content: description },
              { name: 'twitter:title', content: description },
              { name: 'twitter:description', content: description }
            ]}
            title='Spender'
        />
        <p>{'Spender'}</p>
      </div>
    );
  }
}
