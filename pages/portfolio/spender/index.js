import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';

exports.data = {
  title: 'Spender',
  color: 'pink'
};

export default class Spender extends Component {

  constructor() {
    super();
    this.handleLoadedImage = this.handleLoadedImage.bind(this);
  }

  handleLoadedImage() {
    this.refs.carousel.setDimensions();
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
          <Carousel decorators={[]} ref='carousel'>
            <img src='/images/iphone.png' onLoad={this.handleLoadedImage}/>
            <img src='/images/iphone.png'/>
          </Carousel>
        </div>
        <div className='content-container'>
          <p>{'Spender is personal project, where I’m keeping track of my spending through a simple iOS app.'}</p>
          <p>{'Mint is great, but it doesn’t keep track of cash spending. And all the other different spending trackers out there, didn’t meet my specific needs, so I’m building my own version.'}</p>
        </div>
      </div>
    );
  }
}
