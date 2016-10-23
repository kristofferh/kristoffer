import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';

export default class Spender extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render () {
    let description = 'Spender';

    return (
      <div className='portfolio'>
        <Helmet
            meta={[
              { name: 'description', content: description },
              { property: 'og:description', content: description },
              { name: 'twitter:title', content: description },
              { name: 'twitter:description', content: description }
            ]}
            title='Spender'
        />
        <div className='portfolio-carousel'>
         <Carousel decorators={[]}>
          <img src='/images/iphone.png'/>
          <img src='/images/iphone.png'/>
        </Carousel>
        </div>
        <div className='content-container'>
          <p>{'Spender'}</p>
        </div>
      </div>
    );
  }
}
